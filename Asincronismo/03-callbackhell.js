/*Callback hell es anidar multiples llamadas o callbacksque provocan que el codigo sea dificil de
leer y debuggear y por eso 👩🏻‍🚒 significa peligrooooo */ //setear de forma correcta el llamado


fs.readdir(source, function (err, files) {
    if (err) {
      console.log('Error finding files: ' + err)
    } else {
      files.forEach(function (filename, fileIndex) {
        console.log(filename)
        gm(source + filename).size(function (err, values) {
          if (err) {
            console.log('Error identifying file size: ' + err)
          } else {
            console.log(filename + ' : ' + values)
            aspect = (values.width / values.height)
            widths.forEach(function (width, widthIndex) {
              height = Math.round(width / aspect)
              console.log('resizing ' + filename + 'to ' + height + 'x' + height)
              this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
                if (err) console.log('Error writing file: ' + err)
              })
            }.bind(this))
          }
        })
      })
    }
  })



//  getSalesTrimestrePF: 
function getSalesTrimestrePF(user,trimestre,year)
{
  return new Promise(function(cb)
    {
      var emptyData = { auto: 0, salud: 0, vida: 0, hogar: 0 };
      var months = DashboardService.getMonthsTrimestre(trimestre);
      DashboardService.getSalesMonthPF(user,months[0],year,
        function (err, sales_month_1)
        {
          if(err == undefined)
            DashboardService.getSalesMonthPF(user, months[1],year,
              function(err, sales_month2)
              {
                if(err == undefined)
                  DashboardService.getSalesMonthPF(user, months[2],year,
                    function(err, sales_month3)
                    {
                      if(err == undefined){
                        var totals = { auto: (sales_month_1.auto+sales_month2.auto+sales_month3.auto),
                                          salud: (sales_month_1.salud+sales_month2.salud+sales_month3.salud),
                                          vida: (sales_month_1.vida+sales_month2.vida+sales_month3.vida),
                                          hogar: (sales_month_1.hogar+sales_month2.hogar+sales_month3.hogar) };
                        cb({months:[sales_month_1, sales_month2, sales_month3], totals: totals});

                      }
                      else {
                        throw err;
                      }
                    }
                  );
                else
                  throw err;
              }
            );
          else
            throw err;
        }
      );
    }
  );

}