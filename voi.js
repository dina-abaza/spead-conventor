let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        speech.voice = voices[0]; // تعيين الصوت الافتراضي
        voiceSelect.innerHTML = ''; // مسح الخيارات السابقة
        voices.forEach((voice, i) => {
            let option = new Option(voice.name, i);
            voiceSelect.options.add(option); // إضافة الخيارات
        });
    }
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.selectedIndex]; // تعيين الصوت بناءً على الاختيار
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value; // تعيين النص
    window.speechSynthesis.speak(speech); // تشغيل الصوت
});