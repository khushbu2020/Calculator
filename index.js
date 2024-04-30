 
     
      function addToDisplay(val) {
        let v = document.getElementById("display").value; 
        v += val;
        document.getElementById("display").value=v;
      }
  
      function clearDisplay() {
        document.getElementById("display").value = "";
      }
        // function del() {
        //   let del = "";
        //   document.getElementById("myy").value = "";
        // }
  
        
        function calculate() {
        try {
          let a= document.getElementById("display").value;
          document.getElementById("display").value = eval(a);
        } catch (error) {
          document.getElementById("display").value = "Error";
        }
      }
  
      function clr() {
          let ae = document.getElementById("display").value;
          ae = ae.slice(0, -1);
          document.getElementById("display").value = ae;
        }
  
      function toggleSign() {
        let display = document.getElementById("display");
        if (display.value.startsWith("-")) {
          display.value = display.value.substring(1);
        } else {
          display.value = "-" + display.value;
        }
      }
       
  