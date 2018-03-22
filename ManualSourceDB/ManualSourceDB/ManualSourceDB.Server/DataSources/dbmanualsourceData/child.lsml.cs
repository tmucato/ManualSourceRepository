using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class child
    {
        partial void dob_Validate(EntityValidationResultsBuilder results)
        {

            if (this.dob.HasValue && this.dob > DateTime.Today)
            {
                results.AddPropertyError("Data de Nascimento não pode ser no futuro.");
            }
            if (this.dob.HasValue && this.dob <= Convert.ToDateTime("01-01-1900"))
            {
                results.AddPropertyError("Data de Nascimento não pode ser menor que 01-01-1900.");
            }

        }
    }
}
