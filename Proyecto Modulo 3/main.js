// ALUMNOS

const database = [    
    {       
        name: "Camilo Garrido",       
        module: "kata_js",       
        exams: "10,20,30,50,70,100",       
        is_active: false,    
    },    {       
        name: "Nahara Casanova",       
        module: "kata_intro_web",       
        exams: "15,50,70,100",       
        is_active: true,    
    },    {       
        name: "Felipe Plaza",       
        module: "kata_intro_web",       
        exams: "70,20,30,50,70,100,00",       
        is_active: true,    
    },    {       
        name: "Franco Martinez",       
        module: "kata_intro_web",       
        exams: "30,100,100,100,70,100",       
        is_active: true,    
    },    {       
        name: "Francisca Fuentes",       
        module: "kata_js",       
        exams: "40,100,30,50,70,100",       
        is_active: true,    
    },    {       
        name: "Diego Angulo",       
        module: "kata_js",       
        exams: "00,30,55,90,100",       
        is_active: true,    
    },]

// ARRAY APROBADO / DESAPROBADO

let aprobados = [];

let desaprobados = [];

// PROCESO DE REVISION 1 ACTIVOS Y CANTIDAD DE NOTAS

let alumnosNotasActivos = [];

database.forEach((notasActivos) => {
    
    const notasParticion = notasActivos.exams.split(",");

    if((notasParticion.length > 5) & (notasActivos.is_active === true)){
        alumnosNotasActivos.push(notasActivos) 
    } else {
        desaprobados.push(notasActivos)
    }
});

// PROCESO DE REVISION 2 NOTAS BAJAS SEGREGACIÓN

let preAprobados= [];

alumnosNotasActivos.forEach((notas) => {
    const notasParticion = notas.exams.split(",");

    notasParticion.forEach((notasPrueba) => {

        const notaNumero = parseInt(notasPrueba);
        
        if(notaNumero < 10){
            preAprobados.push(notas);
        } 
        if(notaNumero === 10){
            preAprobados.push(notas);
        } 
    });
});

// PROCESO DE REVISIÓN 3 ORDEN DESAPROBADOS Y APROBADOS

alumnosNotasActivos.forEach((busquedaAlumno) => {
    
    let key = false;

   preAprobados.forEach((alumnoDesaprobado) => {

    if(busquedaAlumno === alumnoDesaprobado) {
        desaprobados.push(busquedaAlumno);
        key = true 
    }
   })

   if(key === false) {
    aprobados.push(busquedaAlumno)
   }
});

// MUESTRA FINAL

console.log(`Los Alumnos que aprobaron sus cursos fueron: ${aprobados[0].name} y ${aprobados[1].name}.`) 

console.log(`Los Alumnos que desaprobaron sus cursos fueron: ${desaprobados[0].name}, ${desaprobados[1].name}. ${desaprobados[2].name} y ${desaprobados[3].name}.`)

