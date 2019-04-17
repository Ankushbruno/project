function validate(mf)
{
  var u = mf.uname.value;
  var p = mf.pass.value;
  if(u =="")
  {
     alert("Please enter a User Name");
  }
  if(p=="")
  {
     alert("Please enter a Password");
  }
  if(p!="ankush")
  {
     alert("Please enter correct Password");
  }
  else if( u !="ankush" || p !="ankush")
  {
     alert("Login failed - Please enter correct Username and Password");
  }
}