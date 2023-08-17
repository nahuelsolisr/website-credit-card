﻿using System.ComponentModel.DataAnnotations;

namespace BEwebsiteTC.Models
{
    public class TarjetaCredito
    {
        public int id { get; set; }


        [Required]
        public string Titular { get; set; }
        [Required]
        public string NumeroTarjeta { get; set; }
        [Required]
        public string FechaExpiracion { get; set; }
        [Required]
        public string CVV { get; set; }
    }
}
