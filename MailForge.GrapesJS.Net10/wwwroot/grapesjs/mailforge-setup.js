document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi GrapesJS menggunakan data lokal
    window.emailEditor = grapesjs.init({
        container: '#gjs',
        height: '100%',
        width: 'auto',
        storageManager: false,
        fromElement: true,

        // Menambahkan komponen kustom dengan ikon FontAwesome lokal
        blockManager: {
            blocks: [
                {
                    id: 'text-block',
                    label: '<div class="custom-block-item"><i class="fa fa-font"></i>Teks Baru</div>',
                    category: 'Komponen Utama',
                    content: '<p style="padding: 10px; font-size: 14px; color: #333; font-family: Arial;">Ketik teks email Anda di sini...</p>'
                },
                {
                    id: 'button-block',
                    label: '<div class="custom-block-item"><i class="fa fa-square"></i>Tombol Aksi</div>',
                    category: 'Komponen Utama',
                    content: '<table style="margin: 10px auto;"><tr><td align="center" bgcolor="#0d6efd" style="border-radius: 4px;"><a href="#" target="_blank" style="padding: 10px 20px; color: #ffffff; display: inline-block; text-decoration: none; font-weight: bold; font-size:14px; font-family: Arial;">Klik Di Sini</a></td></tr></table>'
                },
                {
                    id: 'image-block',
                    label: '<div class="custom-block-item"><i class="fa fa-picture-o"></i>Gambar</div>',
                    category: 'Komponen Utama',
                    content: { type: 'image', style: { width: '100%', 'max-width': '600px', height: 'auto' } }
                }
            ]
        }
    });
});

// Fungsi untuk membuka halaman pratinjau (Preview) menggunakan Manipulasi DOM
function openEmailPreview() {
    if (window.emailEditor) {
        var htmlContent = window.emailEditor.getHtml();
        var cssContent = window.emailEditor.getCss();

        var previewWindow = window.open('', '_blank');

        if (previewWindow) {
            previewWindow.document.title = "MailForge Preview";

            var styleTag = previewWindow.document.createElement('style');
            styleTag.innerHTML = cssContent;
            previewWindow.document.head.appendChild(styleTag);

            previewWindow.document.body.style.margin = "0";
            previewWindow.document.body.style.padding = "20px";
            previewWindow.document.body.style.backgroundColor = "#f4f6f9";
            previewWindow.document.body.innerHTML = htmlContent;
        } else {
            alert('Mohon izinkan pop-up pada browser Anda untuk melihat preview!');
        }
    }
}

// Fungsi untuk mengekstrak kode HTML dan CSS murni dari editor ke console log
function exportEmailHtml() {
    if (window.emailEditor) {
        const htmlContent = window.emailEditor.getHtml();
        const cssContent = window.emailEditor.getCss();
        const fullTemplate = `<style>${cssContent}</style>\n${htmlContent}`;

        console.log(fullTemplate);
        alert("Berhasil! Kode HTML email murni sudah dicetak di Console Browser (Tekan F12 untuk melihat).");
    }
}
