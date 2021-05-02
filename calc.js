  function a(){
    var div = document.getElementById('in');
    div.innerText="0";
  }
  function b(){
    var div = document.getElementById('in');
    div.innerText="1";
  }
  function and3(){
      var n = document.getElementById('and').value;
      var n2 = document.getElementById('and2').value;
      if(n=="0"  & n2=="0"){
         a();
      } 
      else  if(n=="0"  & n2=="1"){
        a();
      } 
      else if(n=="1"  & n2=="0"){
          a();
               
         } 
      else if(n=="1"  & n2=="1"){
         b();
      } 
      else{
        alert("this option does not exist")
      }
      }
      function c(){
        var div =  document.getElementById('in2');
        div.innerText="0";
      }
      function d(){
        var div =  document.getElementById('in2');
        div.innerText="1";
      }
        function or3(){
      var n3 = document.getElementById('or').value;
      var n4 = document.getElementById('or2').value;
      if(n3=="0"  & n4=="0"){
         c();
      } 
      else  if(n3=="0"  & n4=="1"){
        d();
      } 
      else if(n3=="1"  & n4=="0"){
          d();
               
         } 
      else if(n3=="1"  & n4=="1"){
         d();
      } 
      else{
        alert("this option does not exist")
      }
      }
      function e(){
        var div = document.getElementById('in4');
        div.innerText="0";
      }
      function f(){
          var div = document.getElementById('in4');
        div.innerText="1";
      }
      function not3(){
       var n5 = document.getElementById('not').value;
       if(n5=="0"){
         var div = document.getElementById('in3')
        div.innerText="1";
       } 
       else  if(n5=="1"){
        var div = document.getElementById('in3')
        div.innerText="0";
       } 
       else{
        alert("this option does not exist");
       }
     }
     function nand3(){
      var n6 = document.getElementById('nand').value;
      var n7 = document.getElementById('nand2').value;
      if(n6=="0" & n7=="0"){
        f();
      }
      else if(n6=="0" & n7=="1"){
           f();
      }
      else if(n6=="1" & n7=="0"){
         f();
      }
      else if(n6=="1" & n7=="1"){
        e();
      }
      else{
        alert("this option does not exist");
      }
     }
    function g(){
      var div = document.getElementById('in5');
      div.innerText="0";
    }
    function h(){
      var div = document.getElementById('in5');
      div.innerText="1";
    }
    function nor3(){
      var n8 = document.getElementById('nor').value;
      var n9 = document.getElementById('nor2').value;
      if(n8=="0" & n9=="0"){
         h();
      }
      else if(n8=="0" & n9=="1"){
         g();
      }
      else if(n8=="1" & n9=="0"){
        g();
      }
      else if(n8=="1" & n9=="1"){
        g();

      }
      else{
        alert("this option does not exist");
      }
    }