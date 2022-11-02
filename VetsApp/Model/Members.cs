using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace VetsApp.Model
{
    public class Members
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string ContactNumber { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        [Required]
        public string Suburb { get; set; }
        [Required]
        public string Postcode { get; set; }
        [Required]
        public string PetName { get; set; }
        [Required]
        public string PetBreed { get; set; }
        [Required]
        public string PetAge { get; set; }
        [Required]
        public string PetGender { get; set; }

    }
}
