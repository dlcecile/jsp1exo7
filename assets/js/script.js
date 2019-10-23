function control()
{
  var saisie1=document.getElementById("shoeSize").value;
  var saisie2=document.getElementById("yearOfBirth").value;
  result= ((((saisie1*2)+5)*50)-saisie2)+1766
  alert(`Résultat: ${result}`);
  return saisie1,saisie2

}
