using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MovieBase.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string returnUrl)
        { 
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }
        public ActionResult Popular()
        {

            return View();
        }
         [HttpGet]
        public ActionResult Movie(string name)
        {

            ViewData["MovieID"] = name;
            return View();
        }
        public ActionResult TopMovies()
        {

            return View();
        }
    }
}