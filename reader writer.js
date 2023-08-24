


  
     
     
    <script type = "text/javascript">
      var mutex =-1;
      function update()
      {

        var checkW =0;
        for(var i=0;i<11;i++)
        {
          //alert(i);
          if(i%2 != 0 && document.forms[0].elements[i].checked==true)
          {
            //alert(i);
            checkW=1;
          }
        }
        //alert(i);
        if(checkW==0)
        {
          mutex=-1;
          //var change = document.getElementById("lock");
          //change.innerHTML ="Writing Lock:"
        }
        for(var i=0;i<11;i++)
        {
          if(i%2 !=0 && document.forms[0].elements[i].checked == true && (mutex==(i-1)/2 || mutex==-1))
          {
            for(var j=0;j<11;j++)
            {
              if(j!=i/* && j%2 ==0*/)// important change made here
              {
                document.forms[0].elements[j].checked = false;
              }
            }
          }
        }
        // for(var i=0;i<15;i++)
        // {
        //   document.getElementById("one").style.backgroundColor = '#FFFFFF';
        //   document.getElementById("two").style.backgroundColor = '#FFFFFF';
        //   document.getElementById("three").style.backgroundColor = '#FFFFFF';
        //   document.getElementById("four").style.backgroundColor = '#FFFFFF';
        //   document.getElementById("five").style.backgroundColor = '#FFFFFF';
        //   document.getElementById("six").style.backgroundColor = '#FFFFFF';
        //   document.getElementById("seven").style.backgroundColor = '#FFFFFF';
        // }
        //alert(mutex);
            if(document.forms[0].elements[0].checked == true)
            {
              //document.getElementById("one").style.backgroundColor = '#00BFFF';
              var c=1;
              document.getElementById("r"+c).innerHTML="Reading...";
              document.getElementById("w1").innerHTML="IDLE";
              document.getElementById("w2").innerHTML="IDLE";
              document.getElementById("w3").innerHTML="IDLE";
              document.getElementById("w4").innerHTML="IDLE";
              document.getElementById("w5").innerHTML="IDLE";
              mutex =-1;
            }
            if(document.forms[0].elements[2].checked == true)
            {
              //document.getElementById("two").style.backgroundColor = '#00BFFF';
              var c=2;
              document.getElementById("r"+c).innerHTML="Reading...";
              document.getElementById("w1").innerHTML="IDLE";
              document.getElementById("w2").innerHTML="IDLE";
              document.getElementById("w3").innerHTML="IDLE";
              document.getElementById("w4").innerHTML="IDLE";
              document.getElementById("w5").innerHTML="IDLE";
              mutex =-1;
            }
            if(document.forms[0].elements[4].checked == true)
            {
              //document.getElementById("three").style.backgroundColor = '#00BFFF';
              var c=3;
              document.getElementById("r"+c).innerHTML="Reading...";
              document.getElementById("w1").innerHTML="IDLE";
              document.getElementById("w2").innerHTML="IDLE";
              document.getElementById("w3").innerHTML="IDLE";
              document.getElementById("w4").innerHTML="IDLE";
              document.getElementById("w5").innerHTML="IDLE";
              mutex =-1;
            }
            if(document.forms[0].elements[6].checked == true)
            {
              //document.getElementById("four").style.backgroundColor = '#00BFFF';
              var c=4;
              document.getElementById("r"+c).innerHTML="Reading...";
              document.getElementById("w1").innerHTML="IDLE";
              document.getElementById("w2").innerHTML="IDLE";
              document.getElementById("w3").innerHTML="IDLE";
              document.getElementById("w4").innerHTML="IDLE";
              document.getElementById("w5").innerHTML="IDLE";
              mutex =-1;
            }
            if(document.forms[0].elements[8].checked == true)
            {
              //document.getElementById("five").style.backgroundColor = '#00BFFF';
              var c=5;
              document.getElementById("r"+c).innerHTML="Reading...";
              document.getElementById("w1").innerHTML="IDLE";
              document.getElementById("w2").innerHTML="IDLE";
              document.getElementById("w3").innerHTML="IDLE";
              document.getElementById("w4").innerHTML="IDLE";
              document.getElementById("w5").innerHTML="IDLE";
              mutex =-1;
            }
            if(document.forms[0].elements[1].checked == true)
            {
              // document.getElementById("one").style.backgroundColor = '#DC143C';
              // var change = document.getElementById("lock");
              // change.innerHTML ="Writing Lock: 1"
              var c= 1;
              document.getElementById("w"+c).innerHTML="Writing...";
              document.getElementById("r1").innerHTML="IDLE";
              document.getElementById("r2").innerHTML="IDLE";
              document.getElementById("r3").innerHTML="IDLE";
              document.getElementById("r4").innerHTML="IDLE";
              document.getElementById("r5").innerHTML="IDLE";
              mutex =0;
            }
            if(document.forms[0].elements[3].checked == true)
            {
              // document.getElementById("two").style.backgroundColor = '#DC143C';
              // var change = document.getElementById("lock");
              // change.innerHTML ="Writing Lock: 2"
              var c= 2;
              document.getElementById("w"+c).innerHTML="Writing...";
              document.getElementById("r1").innerHTML="IDLE";
              document.getElementById("r2").innerHTML="IDLE";
              document.getElementById("r3").innerHTML="IDLE";
              document.getElementById("r4").innerHTML="IDLE";
              document.getElementById("r5").innerHTML="IDLE";
              mutex =1;
            }
            if(document.forms[0].elements[5].checked == true)
            {
              // document.getElementById("three").style.backgroundColor = '#DC143C';
              // var change = document.getElementById("lock");
              // change.innerHTML ="Writing Lock: 3"
              var c= 3;
              document.getElementById("w"+c).innerHTML="Writing...";
              document.getElementById("r1").innerHTML="IDLE";
              document.getElementById("r2").innerHTML="IDLE";
              document.getElementById("r3").innerHTML="IDLE";
              document.getElementById("r4").innerHTML="IDLE";
              document.getElementById("r5").innerHTML="IDLE";
              mutex =2;
            }
            if(document.forms[0].elements[7].checked == true)
            {
              // document.getElementById("four").style.backgroundColor = '#DC143C';
              // var change = document.getElementById("lock");
              // change.innerHTML ="Writing Lock: 4"
              var c= 4;
              document.getElementById("w"+c).innerHTML="Writing...";
              document.getElementById("r1").innerHTML="IDLE";
              document.getElementById("r2").innerHTML="IDLE";
              document.getElementById("r3").innerHTML="IDLE";
              document.getElementById("r4").innerHTML="IDLE";
              document.getElementById("r5").innerHTML="IDLE";
              mutex =3;
            }
            if(document.forms[0].elements[9].checked == true)
            {
              // document.getElementById("five").style.backgroundColor = '#DC143C';
              // var change = document.getElementById("lock");
              // change.innerHTML ="Writing Lock: 5"
              var c= 5;
              document.getElementById("w"+c).innerHTML="Writing...";
              document.getElementById("r1").innerHTML="IDLE";
              document.getElementById("r2").innerHTML="IDLE";
              document.getElementById("r3").innerHTML="IDLE";
              document.getElementById("r4").innerHTML="IDLE";
              document.getElementById("r5").innerHTML="IDLE";
              mutex =4;
            }
            console.log(mutex);
            //alert(mutex);
            if(mutex==-1)
            {
               document.getElementById("doc").disabled = true;
            }
            else
            {
                document.getElementById("doc").disabled = false;
            }
      }
    </script>