using MailForge.GrapesJS.Net10.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace MailForge.GrapesJS.Net10.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // Endpoint baru untuk menerima string HTML dari Editor WYSIWYG
        [HttpPost]
        public IActionResult SaveTemplate([FromBody] EmailData data)
        {
            // Validasi data kiriman
            if (data == null || string.IsNullOrEmpty(data.HtmlContent))
            {
                return Json(new { success = false, message = "Konten email kosong atau tidak valid!" });
            }

            // DI SINI DATA SUDAH MASUK SERVER C#
            // Di masa depan, variabel data.HtmlContent ini bisa dikirim via SMTP MailKit atau disimpan ke DB SQL Server
            string namaTemplate = data.TemplateName ?? "Tanpa Nama";
            string isiHtmlMurni = data.HtmlContent;

            // Kita kembalikan respon sukses ke frontend beserta pesan konfirmasi
            return Json(new
            {
                success = true,
                message = $"Server .NET Berhasil Menerima Template '{namaTemplate}'! Panjang karakter: {isiHtmlMurni.Length}"
            });
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
