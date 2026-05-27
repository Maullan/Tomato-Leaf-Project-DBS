# app/services/ai_service.py
import random
import os

# Daftar class penyakit tomat yang dikenal model
DISEASE_CLASSES = [
    "Tomato_Early_blight",
    "Tomato_Bacterial_spot",
    "Tomato_Late_blight",
    "Tomato_Leaf_Mold",
    "Tomato_Septoria_leaf_spot",
    "Tomato_Spider_mites",
    "Tomato_Target_Spot",
    "Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato_mosaic_virus",
    "Tomato_healthy",
]

# Severity range per penyakit (min, max percent)
SEVERITY_RANGES = {
    "Tomato_Early_blight":          (20.0, 55.0),
    "Tomato_Bacterial_spot":        (30.0, 70.0),
    "Tomato_Late_blight":           (40.0, 85.0),
    "Tomato_Leaf_Mold":             (15.0, 45.0),
    "Tomato_Septoria_leaf_spot":    (10.0, 40.0),
    "Tomato_Spider_mites":          (20.0, 60.0),
    "Tomato_Target_Spot":           (25.0, 55.0),
    "Tomato_Yellow_Leaf_Curl_Virus":(50.0, 90.0),
    "Tomato_mosaic_virus":          (45.0, 80.0),
    "Tomato_healthy":               (0.0,  5.0),
}


def predict_disease(image_path: str) -> dict:
    """
    Simulasi prediksi AI untuk demo.

    Jika model TensorFlow tersedia di path MODEL_PATH,
    gunakan model sungguhan. Jika tidak, gunakan simulasi
    dengan distribusi probabilitas yang realistis.
    """
    # Coba load model TensorFlow jika ada
    try:
        from app.core.config import settings
        if os.path.exists(settings.MODEL_PATH):
            return _predict_with_model(image_path, settings.MODEL_PATH)
    except Exception:
        pass

    # Fallback: simulasi realistis
    return _predict_simulated(image_path)


def _predict_simulated(image_path: str) -> dict:
    """
    Simulasi prediksi dengan distribusi probabilitas realistis.
    Tomat healthy punya peluang 30%, penyakit lain 70%.
    """
    # 30% kemungkinan healthy, 70% salah satu penyakit
    if random.random() < 0.30:
        class_name = "Tomato_healthy"
    else:
        # Pilih random dari penyakit (kecuali healthy)
        diseased = [c for c in DISEASE_CLASSES if c != "Tomato_healthy"]
        class_name = random.choice(diseased)

    # Confidence realistis (80-99%)
    confidence = round(random.uniform(0.80, 0.99), 4)

    # Severity berdasarkan range per penyakit
    sev_min, sev_max = SEVERITY_RANGES.get(class_name, (10.0, 50.0))
    severity = round(random.uniform(sev_min, sev_max), 2)

    return {
        "class_name": class_name,
        "confidence": confidence,
        "severity": severity,
        "notes": f"Simulasi AI — confidence {confidence*100:.1f}%",
    }


def _predict_with_model(image_path: str, model_path: str) -> dict:
    """
    Prediksi menggunakan model TensorFlow/Keras yang sesungguhnya.
    Diaktifkan otomatis jika file model tersedia.
    """
    import numpy as np
    try:
        import tensorflow as tf
    except ImportError:
        return _predict_simulated(image_path)

    # Load dan preprocess gambar
    img = tf.keras.utils.load_img(image_path, target_size=(224, 224))
    img_array = tf.keras.utils.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0) / 255.0

    # Load model dan predict
    model = tf.keras.models.load_model(model_path)
    predictions = model.predict(img_array, verbose=0)

    # Ambil class dengan confidence tertinggi
    class_idx = np.argmax(predictions[0])
    confidence = float(predictions[0][class_idx])
    class_name = DISEASE_CLASSES[class_idx] if class_idx < len(DISEASE_CLASSES) else "Tomato_healthy"

    sev_min, sev_max = SEVERITY_RANGES.get(class_name, (10.0, 50.0))
    severity = round((confidence * sev_max), 2)

    return {
        "class_name": class_name,
        "confidence": round(confidence, 4),
        "severity": severity,
        "notes": f"Prediksi model AI — confidence {confidence*100:.1f}%",
    }