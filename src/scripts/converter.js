/**
 * Convert image file to Base64 and pass its value to input
 */
function convertImageFile() {
    const imageField = document.querySelector('.image-file')

    imageField.addEventListener('change', () => {
        let imageFile = document.querySelector('.image-file').files

        if (imageFile.length > 0) {
            setBase64(imageFile[0]);
        }
    })

    const setBase64 = (file) => {
        // Dom Elements
        const resultField = document.querySelector('.result')
        const textField = document.querySelector('.text-field')
        const defaultImage = document.querySelector('.image-preview')

        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = function () {
            defaultImage.setAttribute('src', reader.result)
            defaultImage.classList.remove('icon')
            resultField.classList.add('is-visible')
            textField.value = reader.result
        };
    }
}

/**
 * Copy base64 code to clipboard
 */
const copyToClipboard = () => {
    const textField = document.querySelector('.text-field')
    const copyButton = document.querySelector('.copy-button')

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textField.value)
            .then(
                // sucess
                () => {
                    alert('Texto Copiado com sucesso!')
                },
                // error
                () => {
                    alert('Falha ao copiar texto')
                }
            )
    })
}

window.addEventListener('load', function() {
    convertImageFile()
    copyToClipboard()
})