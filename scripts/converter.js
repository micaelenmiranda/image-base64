/**
 * Add preview for uploaded image
 */
const addImagePreview = () => {
    const imageField = document.querySelector('.image-file')

    imageField.addEventListener('change', function() {
        let imageFile = document.querySelector('.image-file').files
        setBase64(imageFile[0]);
    })

    const setBase64 = (file) => {
        const defaultImage = document.querySelector('.image-preview')
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = function () {
            defaultImage.setAttribute('src', reader.result)
        };
    }
}

/**
 * Convert image file to Base64 and pass its value to an area
 */
function addBase64Code() {
    const applyButton = document.querySelector('.apply-button')

    applyButton.addEventListener('click', () => {
        let imageFile = document.querySelector('.image-file').files

        if (imageFile.length > 0) {
            setBase64(imageFile[0]);
        }
    })

    const setBase64 = (file) => {
        const textField = document.querySelector('.text-field')

        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = function () {
            textField.innerText = reader.result
            console.log(reader.result)
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
        navigator.clipboard.writeText(textField.innerText)
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
    addImagePreview()
    addBase64Code()
    copyToClipboard()
})