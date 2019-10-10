const fs = require('fs')
const handlebars = require('handlebars')
const pdf = require('html-pdf')

module.exports = {
    pdfcreate: (html, replacements, options, cb) => {
        fs.readFile(html, {encoding: 'utf-8'}, (err, readHTML)=>{
            if(err) {
                console.log(err)
                return false
            } else {
                var template = handlebars.compile(readHTML)
                var HTMLtoPDF = template(replacements) //Htmltopdf disini adalah sebuah stream

                pdf.create(HTMLtoPDF, options). toStream((err,stream)=>{
                        if(err) {
                            console.log(err)
                            return cb(stream)                    
                        }else{
                            return cb(stream)
                        }
                })
            }
        })
    }
}

// pdfcreate nanti akan mengirim path filenya dan hasil akahirnya akan berubah menjadi stream atau hasil pada authrouter.js
// fs adalah modlue dari js
// fs bisa ngeread dan ?
// cb adalah callback yang berisi parameter stream
