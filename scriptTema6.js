document.addEventListener('DOMContentLoaded', () => {
    // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
    // Similar al proporcionado en el código de referencia
    const quizData = [
        {
            question: "1. ¿Qué es una forma jurídica?",
            a: "La descripción de las operaciones comerciales de una empresa",
            b: "La regulación de las relaciones laborales dentro de una empresa",
            c: "El marco legal que determina la constitución y funcionamiento de una empresa",
            d: "Un protocolo para la comunicación interna en la empresa",
            correct: "c",
            explanation: "La forma jurídica de una empresa define el marco legal bajo el cual opera, determinando su constitución, funcionamiento y las leyes que le aplican."
        },
        {
            question: "2. ¿Cuál de las siguientes no es una característica de la empresa individual?",
            a: "Responsabilidad ilimitada",
            b: "Gestión y control por parte de una sola persona",
            c: "Capital mínimo requerido por ley",
            d: "No requiere inscripción en el Registro Mercantil",
            correct: "d",
            explanation: "La empresa individual sí requiere inscripción en el Registro Mercantil, a diferencia de lo indicado en la opción."
        },
        {
            question: "3. ¿Qué forma jurídica permite la separación entre la propiedad y la gestión de la empresa?",
            a: "Sociedad Limitada",
            b: "Sociedad Anónima",
            c: "Empresa Individual",
            d: "Comunidad de Bienes",
            correct: "b",
            explanation: "La Sociedad Anónima permite la separación entre la propiedad de los accionistas y la gestión de la empresa, a través de un consejo de administración."
        },
        {
            question: "4. ¿Qué tipo de sociedad exige un capital social mínimo de 3.000 euros para su constitución?",
            a: "Sociedad Anónima",
            b: "Sociedad Limitada",
            c: "Sociedad Comanditaria",
            d: "Sociedad Colectiva",
            correct: "b",
            explanation: "La Sociedad Limitada requiere un capital social mínimo de 3.000 euros para su constitución."
        },
        {
            question: "5. ¿En qué consiste la responsabilidad limitada?",
            a: "Los socios responden de las deudas sociales solo hasta el límite de su aportación al capital",
            b: "Los socios tienen responsabilidad ilimitada y personal con todo su patrimonio",
            c: "La empresa no puede contraer deudas",
            d: "Todas las anteriores son incorrectas",
            correct: "a",
            explanation: "La responsabilidad limitada significa que los socios o accionistas solo responden por las deudas de la empresa hasta el límite de su aportación al capital social."
        },
        {
            question: "6. ¿Qué documento es imprescindible para constituir una sociedad limitada?",
            a: "Un informe de sostenibilidad",
            b: "La escritura de constitución inscrita en el Registro Mercantil",
            c: "Un plan de negocio detallado",
            d: "Un acuerdo de confidencialidad entre los socios",
            correct: "b",
            explanation: "Para constituir una sociedad limitada es imprescindible la escritura de constitución, la cual debe estar inscrita en el Registro Mercantil."
        },
        {
            question: "7. ¿Qué caracteriza a una sociedad anónima?",
            a: "La gestión puede ser llevada a cabo por uno o varios socios",
            b: "El capital está dividido en acciones, las cuales pueden ser transmitidas libremente",
            c: "Se requiere un mínimo de 3 socios para su constitución",
            d: "La responsabilidad de los socios es ilimitada",
            correct: "b",
            explanation: "Una sociedad anónima se caracteriza porque su capital está dividido en acciones, las cuales pueden ser transmitidas libremente, facilitando la inversión y la variabilidad en la propiedad."
        },
        {
            question: "8. ¿Cuál es el capital mínimo requerido para constituir una Sociedad Anónima?",
            a: "3.000 euros",
            b: "60.000 euros",
            c: "120.200 euros",
            d: "No hay un mínimo establecido",
            correct: "b",
            explanation: "El capital mínimo para constituir una Sociedad Anónima es de 60.000 euros."
        },
        {
            question: "9. ¿Qué afirmación sobre las cooperativas es correcta?",
            a: "Su objetivo principal es obtener beneficios para distribuir entre los socios.",
            b: "Están exentas de cualquier tipo de impuesto.",
            c: "Se rigen por el principio de puertas cerradas.",
            d: "Fomentan la participación democrática de los socios.",
            correct: "d",
            explanation: "Las cooperativas fomentan la participación democrática de los socios, donde cada socio tiene un voto."
        },
        {
            question: "10. ¿Cuál es una característica de las Sociedades Laborales?",
            a: "La mayoría del capital debe ser pública.",
            b: "No pueden realizar actividades económicas.",
            c: "La mayoría del capital debe estar en manos de los trabajadores.",
            d: "No tienen limitación en el número de socios.",
            correct: "c",
            explanation: "En las Sociedades Laborales, la mayoría del capital debe estar en manos de los trabajadores."
        },
        {
            question: "11. ¿Qué es una Sociedad Civil?",
            a: "Una entidad sin personalidad jurídica.",
            b: "Una sociedad con un mínimo de 3.005 euros de capital.",
            c: "Un tipo de sociedad mercantil.",
            d: "Una sociedad con personalidad jurídica propia.",
            correct: "a",
            explanation: "Una Sociedad Civil es una entidad sin personalidad jurídica propia."
        },
        {
            question: "12. ¿Qué implica la responsabilidad limitada en una Sociedad Limitada?",
            a: "Los socios responden de las deudas sociales solo con su capital aportado.",
            b: "Los socios tienen responsabilidad ilimitada con su patrimonio personal.",
            c: "No existe responsabilidad alguna por parte de los socios.",
            d: "Los socios responden de forma limitada solo ante demandas laborales.",
            correct: "a",
            explanation: "En una Sociedad Limitada, los socios responden de las deudas sociales únicamente hasta el límite de su aportación de capital."
        },
        {
            question: "13. ¿Cuál es un requisito para constituir una Sociedad Anónima?",
            a: "Debe realizarse totalmente en línea.",
            b: "Debe tener al menos 1.000 socios.",
            c: "El capital social debe estar totalmente suscrito y desembolsado.",
            d: "No requiere de escritura pública.",
            correct: "c",
            explanation: "Para constituir una Sociedad Anónima, el capital social debe estar totalmente suscrito y desembolsado."
        },
        {
            question: "14. ¿Qué significa que una sociedad sea 'Sociedad de Responsabilidad Limitada'?",
            a: "Que los socios tienen responsabilidad ilimitada.",
            b: "Que la sociedad no puede incurrir en deudas.",
            c: "Que los socios responden por las deudas de la sociedad solo hasta el monto de su aportación.",
            d: "Que la sociedad tiene una duración limitada.",
            correct: "c",
            explanation: "En una Sociedad de Responsabilidad Limitada, los socios responden por las deudas de la sociedad solo hasta el monto de su aportación."
        },
        {
            question: "15. ¿Cuál es la responsabilidad de los socios en una Sociedad Anónima?",
            a: "Limitada al capital aportado",
            b: "Ilimitada, responden con su patrimonio personal",
            c: "Depende del acuerdo entre socios",
            d: "No tienen responsabilidad alguna",
            correct: "a",
            explanation: "En una Sociedad Anónima, la responsabilidad de los socios está limitada al capital aportado, no respondiendo personalmente de las deudas sociales."
        },
        {
            question: "16. ¿Qué cantidad mínima de capital social es necesario para constituir una Sociedad Limitada?",
            a: "3.000 euros",
            b: "60.000 euros",
            c: "120.202 euros",
            d: "No hay mínimo establecido",
            correct: "a",
            explanation: "Para constituir una Sociedad Limitada se necesita un capital social mínimo de 3.000 euros."
        },
        {
            question: "17. ¿Qué documento es imprescindible para constituir una sociedad?",
            a: "Escritura pública",
            b: "Contrato privado entre socios",
            c: "Documento Nacional de Identidad",
            d: "Ninguno de los anteriores",
            correct: "a",
            explanation: "Para constituir una sociedad es imprescindible formalizar la constitución mediante una escritura pública."
        },
        {
            question: "18. ¿Cuál es la forma jurídica recomendada para un empresario individual?",
            a: "Sociedad Anónima",
            b: "Sociedad Limitada",
            c: "Empresario Individual no necesita forma jurídica específica",
            d: "Sociedad Colectiva",
            correct: "c",
            explanation: "El Empresario Individual opera bajo su propio nombre, sin necesidad de adoptar una forma jurídica societaria."
        },
        {
            question: "19. ¿Qué forma jurídica permite a sus miembros la transmisión libre de sus participaciones?",
            a: "Sociedad Anónima",
            b: "Sociedad Limitada",
            c: "Sociedad Colectiva",
            d: "Sociedad Comanditaria Simple",
            correct: "a",
            explanation: "En la Sociedad Anónima, las acciones pueden transmitirse libremente, a diferencia de otras formas donde existen restricciones."
        },
        {
            question: "20. ¿Qué forma jurídica exige la realización de una auditoría de cuentas anual obligatoria al superar ciertos límites?",
            a: "Empresario Individual",
            b: "Sociedad Limitada",
            c: "Sociedad Anónima",
            d: "Todas las anteriores",
            correct: "c",
            explanation: "Las Sociedades Anónimas están obligadas a realizar una auditoría de cuentas anual al superar determinados límites establecidos por la ley."
        },
        {
            question: "21. ¿Qué ventaja ofrece la Sociedad Limitada Nueva Empresa?",
            a: "Permite socios con responsabilidad ilimitada",
            b: "Ofrece un proceso de constitución más rápido y sencillo",
            c: "No requiere de un mínimo de capital social",
            d: "Todas las anteriores son incorrectas",
            correct: "b",
            explanation: "La Sociedad Limitada Nueva Empresa está diseñada para ofrecer un proceso de constitución más rápido y sencillo, facilitando el inicio de actividades empresariales."
        },
        {
            question: "22. ¿Cuál es una ventaja de constituir una empresa como sociedad limitada?",
            a: "Responsabilidad ilimitada de los socios",
            b: "Menor carga fiscal comparada con las sociedades anónimas",
            c: "Responsabilidad limitada al capital aportado",
            d: "No es necesario inscribirla en el Registro Mercantil",
            correct: "c",
            explanation: "Una ventaja significativa de la sociedad limitada es que los socios tienen una responsabilidad limitada al capital aportado, protegiendo su patrimonio personal frente a deudas de la empresa."
        },
        {
            question: "23. ¿Qué requisito es indispensable para la constitución de una sociedad anónima?",
            a: "Un mínimo de 3 socios",
            b: "Capital social mínimo de 60.000 euros, desembolsado al menos en un 25%",
            c: "Todos los socios deben ser personas físicas",
            d: "No requiere inscripción en el Registro Mercantil",
            correct: "b",
            explanation: "Para constituir una sociedad anónima es indispensable contar con un capital social mínimo de 60.000 euros, del cual al menos un 25% debe estar desembolsado en el momento de la constitución."
        },
        {
            question: "24. ¿Cuál es una característica de las cooperativas?",
            a: "Se rigen por el principio de un socio, un voto",
            b: "El capital social debe ser desembolsado en su totalidad desde la constitución",
            c: "No pueden realizar actividades económicas",
            d: "Son siempre de carácter no lucrativo",
            correct: "a",
            explanation: "Las cooperativas se rigen por el principio democrático de 'un socio, un voto', independientemente del capital aportado por cada socio."
        },
        {
            question: "25. ¿Qué forma jurídica se recomienda para proyectos empresariales de alto riesgo?",
            a: "Empresario individual",
            b: "Comunidad de bienes",
            c: "Sociedad Limitada",
            d: "Sociedad Colectiva",
            correct: "c",
            explanation: "Se recomienda la Sociedad Limitada para proyectos de alto riesgo debido a que limita la responsabilidad de los socios al capital aportado, protegiendo su patrimonio personal."
        },
        {
            question: "26. ¿Cuál es la responsabilidad de los socios en una Sociedad de Responsabilidad Limitada?",
            a: "Limitada al capital aportado",
            b: "Ilimitada y solidaria",
            c: "Limitada únicamente a los administradores",
            d: "No tienen responsabilidad alguna",
            correct: "a",
            explanation: "En una Sociedad de Responsabilidad Limitada, la responsabilidad de los socios está limitada al capital aportado. Esto significa que los socios no responden personalmente por las deudas de la sociedad, protegiendo así su patrimonio personal."
        },      
        {
            question: "27. ¿Qué forma jurídica recomendarías para un proyecto empresarial con bajo riesgo y poca necesidad de inversión inicial?",
            a: "Sociedad Anónima",
            b: "Sociedad de Responsabilidad Limitada",
            c: "Empresario individual",
            d: "Sociedad Colectiva",
            correct: "c",
            explanation: "Para un proyecto con bajo riesgo y poca inversión inicial, la forma jurídica de Empresario individual es adecuada, ya que ofrece simplicidad en su constitución y gestión, además de no requerir un capital mínimo para su creación."
        },
        {
            question: "28. ¿Qué característica distingue principalmente a una Sociedad Laboral?",
            a: "Está formada únicamente por trabajadores",
            b: "Su objetivo es la intervención en el mercado laboral",
            c: "La mayoría del capital debe ser propiedad de los trabajadores",
            d: "No puede operar en el sector servicios",
            correct: "c",
            explanation: "Una Sociedad Laboral se caracteriza principalmente porque la mayoría del capital social debe ser propiedad de los trabajadores que prestan servicios retribuidos de forma personal y directa, y de manera indefinida en la empresa."
        },
        {
            question: "29. ¿Cuál es el mínimo de socios para constituir una Sociedad Anónima?",
            a: "Un socio",
            b: "Dos socios",
            c: "Tres socios",
            d: "No hay mínimo",
            correct: "a",
            explanation: "Para constituir una Sociedad Anónima, el mínimo de socios requerido es de uno, permitiendo así la constitución de sociedades unipersonales bajo esta forma jurídica."
        },
        {
            question: "30. ¿Qué afirmación es correcta respecto a la responsabilidad de los socios en una Sociedad Colectiva?",
            a: "Limitada al capital aportado",
            b: "Limitada únicamente a los administradores",
            c: "Ilimitada y solidaria",
            d: "Limitada al doble del capital aportado",
            correct: "c",
            explanation: "En una Sociedad Colectiva, la responsabilidad de los socios es ilimitada y solidaria, lo que significa que responden de manera personal y conjunta ante las deudas sociales con su propio patrimonio."
        },
        {
            question: "31. ¿Cuál de las siguientes no es una característica de las Sociedades Civiles?",
            a: "Pueden tener objeto mercantil",
            b: "Requieren un mínimo de dos socios",
            c: "La responsabilidad de los socios es limitada",
            d: "Se constituyen mediante un contrato privado o escritura pública",
            correct: "c",
            explanation: "Las Sociedades Civiles se caracterizan por tener responsabilidad ilimitada de los socios frente a las deudas sociales, no limitada, lo que diferencia a esta forma jurídica de otras como las sociedades de responsabilidad limitada."
        },
        {
            question: "32. ¿Qué forma jurídica se caracteriza por no tener personalidad jurídica propia?",
            a: "Sociedad Limitada Nueva Empresa",
            b: "Comunidad de Bienes",
            c: "Sociedad de Responsabilidad Limitada",
            d: "Sociedad Anónima",
            correct: "b",
            explanation: "La Comunidad de Bienes no tiene personalidad jurídica propia, lo que significa que no puede realizar actividades bajo una denominación social ni tiene capacidad para ser titular de derechos y obligaciones de forma independiente a los comuneros."
        },
        {
            question: "33. ¿Cuál es el capital mínimo requerido para constituir una Sociedad Anónima?",
            a: "3.000 euros",
            b: "60.000 euros",
            c: "120.000 euros",
            d: "No hay mínimo requerido",
            correct: "b",
            explanation: "El capital mínimo para constituir una Sociedad Anónima es de 60.000 euros, de los cuales debe desembolsarse al menos el 25% en el momento de la constitución."
        },
        {
            question: "34. ¿Qué significa que una empresa tenga responsabilidad limitada?",
            a: "Que los socios no responden con su patrimonio personal ante deudas de la empresa",
            b: "Que los socios responden ilimitadamente con su patrimonio personal",
            c: "Que la empresa no puede contraer deudas",
            d: "Que solo el administrador responde con su patrimonio",
            correct: "a",
            explanation: "En una empresa de responsabilidad limitada, los socios o accionistas no están obligados a responder con su patrimonio personal ante las deudas de la empresa."
        },
        {
            question: "35. ¿Qué es necesario para la constitución de una Sociedad Limitada?",
            a: "Escribano público",
            b: "Escritura pública y registro en el Registro Mercantil",
            c: "Aprobación del gobierno",
            d: "Una inversión mínima de 100.000 euros",
            correct: "b",
            explanation: "Para constituir una Sociedad Limitada es necesario otorgar una escritura pública y proceder a su inscripción en el Registro Mercantil."
        },
        {
            question: "36. ¿Cuál de las siguientes afirmaciones es correcta respecto a las sociedades laborales?",
            a: "La mayoría del capital debe ser propiedad de los trabajadores",
            b: "No pueden tener más de 25 trabajadores",
            c: "El capital social mínimo es de 120.000 euros",
            d: "Los trabajadores no pueden participar en la gestión",
            correct: "a",
            explanation: "En las sociedades laborales, la mayoría del capital social debe ser propiedad de los trabajadores que presten en ella servicios retribuidos de forma personal y directa."
        },
        {
            question: "37. ¿Qué característica es propia de las cooperativas?",
            a: "Capital social variable y abierto",
            b: "Capital social fijo",
            c: "Número cerrado de socios",
            d: "No pueden realizar actividades económicas",
            correct: "a",
            explanation: "Las cooperativas se caracterizan por tener un capital social variable y abierto, lo que permite adaptarse mejor a las necesidades de sus socios."
        },
        {
            question: "38. ¿Cuál de las siguientes NO es una característica de las sociedades anónimas?",
            a: "Libre transmisibilidad de las acciones",
            b: "Número mínimo de socios",
            c: "Capital social dividido en participaciones iguales",
            d: "Gestión a cargo de un único administrador",
            correct: "d",
            explanation: "La gestión de una sociedad anónima no está necesariamente a cargo de un único administrador; puede ser gestionada por un consejo de administración compuesto por varios miembros."
        },
        {
            question: "39. ¿En qué se diferencia una Sociedad de Responsabilidad Limitada de una Sociedad Anónima?",
            a: "En el capital mínimo para su constitución",
            b: "En la responsabilidad de los socios",
            c: "En la forma de gestión",
            d: "En la transmisibilidad de las participaciones o acciones",
            correct: "a",
            explanation: "La principal diferencia entre una Sociedad de Responsabilidad Limitada y una Sociedad Anónima radica en el capital mínimo para su constitución; siendo menor en la Sociedad de Responsabilidad Limitada."
        },
        {
            question: "40. ¿Qué figura jurídica no está obligada a llevar a cabo una auditoría de cuentas anualmente?",
            a: "Sociedad Anónima",
            b: "Sociedad Limitada",
            c: "Sociedad Colectiva",
            d: "Todas las anteriores están obligadas",
            correct: "c",
            explanation: "Las Sociedades Colectivas no están obligadas a realizar auditorías de cuentas anualmente a menos que superen ciertos límites establecidos por la ley en términos de facturación, balance o número de empleados."
        },
        {
            question: "41. ¿Cuál es el capital social mínimo requerido para constituir una Sociedad Anónima?",
            a: "3.000 euros",
            b: "60.000 euros",
            c: "120.202 euros",
            d: "No hay mínimo",
            correct: "b",
            explanation: "Para constituir una Sociedad Anónima es necesario un capital social mínimo de 60.000 euros."
        },
        {
            question: "42. ¿Qué tipo de sociedad puede transmitir sus participaciones libremente?",
            a: "Sociedad Limitada",
            b: "Sociedad Anónima",
            c: "Sociedad Colectiva",
            d: "Sociedad Comanditaria Simple",
            correct: "b",
            explanation: "Las Sociedades Anónimas pueden transmitir sus acciones libremente, a diferencia de las Sociedades Limitadas, donde la transmisión de participaciones sociales está sujeta a restricciones."
        },
        {
            question: "43. ¿Cuál de las siguientes afirmaciones es correcta respecto a la responsabilidad de los socios en una Sociedad Colectiva?",
            a: "Limitada al capital aportado",
            b: "Ilimitada y solidaria",
            c: "Limitada a una cantidad específica superior al capital aportado",
            d: "No tienen responsabilidad",
            correct: "b",
            explanation: "En una Sociedad Colectiva, los socios tienen una responsabilidad ilimitada y solidaria por las deudas sociales."
        },
        {
            question: "44. ¿Qué tipo de sociedad no puede cotizar en bolsa?",
            a: "Sociedad Anónima",
            b: "Sociedad Limitada",
            c: "Sociedad Comanditaria por Acciones",
            d: "Todas pueden cotizar en bolsa",
            correct: "b",
            explanation: "Las Sociedades Limitadas no pueden cotizar en bolsa, a diferencia de las Sociedades Anónimas y las Sociedades Comanditarias por Acciones que sí pueden hacerlo."
        },
        {
            question: "45. ¿Cuál de las siguientes opciones es una característica de las Sociedades Laborales?",
            a: "Capital propiedad de los trabajadores en un mínimo del 25%",
            b: "No pueden tener más de 25 trabajadores",
            c: "Capital propiedad de los trabajadores en un mínimo del 51%",
            d: "No existen limitaciones en la transmisión de acciones",
            correct: "c",
            explanation: "En las Sociedades Laborales, la mayoría del capital debe ser propiedad de los trabajadores que prestan servicios retribuidos de forma personal y directa, en un mínimo del 51%."
        },
        {
            question: "46. ¿Qué forma jurídica requiere para su constitución la redacción de unos estatutos sociales?",
            a: "Empresario individual",
            b: "Comunidad de bienes",
            c: "Sociedad Limitada",
            d: "Todas las anteriores",
            correct: "c",
            explanation: "Para la constitución de una Sociedad Limitada es necesaria la redacción de unos estatutos sociales que regulen su funcionamiento interno."
        },
        {
            question: "47. ¿Qué tipo de sociedad ofrece la mayor flexibilidad en la gestión y distribución de beneficios?",
            a: "Sociedad Limitada",
            b: "Sociedad Anónima",
            c: "Sociedad Colectiva",
            d: "Sociedad Comanditaria Simple",
            correct: "a",
            explanation: "La Sociedad Limitada ofrece mayor flexibilidad en la gestión y en la distribución de beneficios entre sus socios, permitiendo adaptar estos aspectos a las necesidades específicas de la sociedad."
        },
        {
            question: "48. ¿Qué organismo es responsable de la inscripción de las Sociedades Laborales?",
            a: "Registro Mercantil",
            b: "Registro de la Propiedad",
            c: "Oficina de Patentes y Marcas",
            d: "Ninguno de los anteriores",
            correct: "a",
            explanation: "Las Sociedades Laborales deben inscribirse en el Registro Mercantil, donde se registran todas las sociedades mercantiles."
        },
        {
            question: "49. ¿Cuál es el capital mínimo requerido para constituir una Sociedad Anónima Laboral?",
            a: "3.000 euros",
            b: "60.000 euros",
            c: "120.202 euros",
            d: "No hay un mínimo establecido",
            correct: "b",
            explanation: "Para constituir una Sociedad Anónima Laboral, el capital mínimo requerido es de 60.000 euros."
        },
        {
            question: "50. ¿Qué porcentaje del capital social debe ser propiedad de los trabajadores en una Sociedad Laboral?",
            a: "Más del 25%",
            b: "Más del 50%",
            c: "Más del 75%",
            d: "100%",
            correct: "b",
            explanation: "En una Sociedad Laboral, más del 50% del capital social debe ser propiedad de los trabajadores que presten en ella servicios retribuidos de forma personal y directa, y cuya relación laboral sea por tiempo indefinido."
        }        
    ];
    
    
    const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

function loadQuiz() {
    const quizQuestions = quizData.map((q, index) => {
        return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
    }).join('');
    quizForm.innerHTML = quizQuestions;
}

function submitQuiz() {
    const answers = quizData.map((_, index) => {
        return document.querySelector(`input[name="question${index}"]:checked`)?.value;
    });

    let score = 0;
    let resultsHTML = '';

    answers.forEach((answer, index) => {
        const questionElement = document.getElementById(`question-${index}`);
        if (answer === quizData[index].correct) {
            score++;
            resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${index + 1}: correcta.</b></a> ${quizData[index].explanation}</p>`;
            questionElement.classList.remove('incorrect');
        } else {
            resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${index + 1}: INCORRECTA.</b></a> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
            questionElement.classList.add('incorrect');
        }
    });

    const finalScore = (score / quizData.length) * 10;
    resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

    resultDiv.innerHTML = resultsHTML;
}

window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
loadQuiz();
});