document.addEventListener('DOMContentLoaded',function(){
        document.querySelector("form").onsubmit=function(){
           fetch("http://api.exchangeratesapi.io/v1/latest?access_key=e53b07350b5ceb6786233e0976b3df3e")
          .then(response => response.json())
          .then(data => {
              let h1=document.querySelector("h1");
              let code=document.querySelector("#code").value;
              let rate=data.rates[code.toUpperCase()];
              if (rate === undefined)
              {
                alert(`Invalid Country Code`);
              }
              else
              {
                h1.innerHTML=`1 EUR is equal to ${rate} ${code}`;
              }
              document.querySelector("#code").value='';

        })
          return false;
        }
      })
