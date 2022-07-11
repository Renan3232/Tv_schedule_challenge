    //Creating a variable to store the url value: 
          const url = "https://run.mocky.io/v3/82416402-1fb2-4b2b-adae-a21661b4c31a";
          fetch(url)
          .then((data) =>{
          return data.json(); //converting to object
          }) .then((objectData)=>{
           let tableData="";
           let info = objectData;
          console.log(info);
          currentTime= info.currentTime;
          
          Object.values(info).map((events)=>{
              tableData =
              
                 `
                 <caption>Tv Schedule</caption>
                 <thead>
                <tr>
                <th scope ="col"> Chanel </th>
                <th scopw = "col"> Start at </th>
                <th scopw = "col"> Finish at </th>
                 </thead>

                 <tr>
                    <th>${events[0].channelIds}</th>
                    <th>${events[0].start}</th>
                    <td>${events[0].end}</th>
                </tr>
                <tr>
                  <th>${events[0].tags}</th>
                  <td colspan="2">${events[0].name}</th>
                 </tr>
                 <tr>
                    <th>${events[1].channelIds}</th>
                    <th>${events[1].start}</th>
                    <td>${events[1].end}</th>
                </tr>
                <tr>
                  <th>${events[1].tags}</th>
                  <td colspan="2">${events[1].name}</th>
                 </tr>
                 <tr>
                    <th>${events[2].channelIds}</th>
                    <th>${events[2].start}</th>
                    <td>${events[2].end}</th>
                </tr>
                <tr>
                  <th>${events[2].tags}</th>
                  <td colspan="2">${events[2].name}</th>
                 </tr>
                  `      
               
            })

            document.getElementById("table_data").innerHTML=tableData;
          
          });