const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (base, listar, hasta) =>
{
    try
    {    
        let outconsole = "";
        let output = "";
        for (let index = 1; index <= hasta; index++) {
            outconsole += `${base} ${'x'.magenta} ${index} = ${base*index} \n`;
            output += `${base} x ${index} = ${base*index} \n`;    
        }
        
        fs.writeFileSync(`./output/Tabla_${base}.txt`, output);
        
        if(listar){
            console.log(colors.bgMagenta("==================="));
            console.log(colors.bgMagenta("Tabla del ", base));
            console.log(colors.bgMagenta("==================="));
            console.log(outconsole);
        }

        return `Tabla del ${base} creada`;
    }
    catch(err)
    {
        throw err;
    }
}

module.exports = {
    crearArchivoTabla,
}