document.addEventListener('DOMContentLoaded', () => {
    // Asumiendo que tienes un array de objetos con las preguntas, opciones y la respuesta correcta
    // Similar al proporcionado en el código de referencia
    const quizData = [
        {
            question: "1. ¿Qué objetivo tiene el plan financiero en una empresa?",
            a: "Establecer las fiestas de la empresa",
            b: "Identificar las inversiones necesarias y las fuentes de financiación",
            c: "Seleccionar los empleados del mes",
            d: "Todas las anteriores",
            correct: "b",
            explanation: "El plan financiero busca identificar las inversiones y cómo financiarlas."
        },
        {
            question: "2. ¿Qué representa el activo en el patrimonio de una empresa?",
            a: "Las deudas",
            b: "Los beneficios no distribuidos",
            c: "Los bienes y derechos",
            d: "Ninguna de las anteriores",
            correct: "c",
            explanation: "El activo incluye los bienes y derechos de la empresa."
        },
        {
            question: "3. ¿Cuál de los siguientes es un componente de las cuentas anuales?",
            a: "El plan de marketing",
            b: "La cuenta de pérdidas y ganancias",
            c: "La lista de empleados",
            d: "El menú de la cafetería",
            correct: "b",
            explanation: "Las cuentas anuales incluyen la cuenta de pérdidas y ganancias."
        },
        {
            question: "4. ¿Qué indica el punto muerto o umbral de rentabilidad?",
            a: "El salario de los empleados",
            b: "El momento en que la empresa comienza a generar beneficios",
            c: "La cantidad de productos defectuosos",
            d: "Las vacaciones de los directivos",
            correct: "b",
            explanation: "Indica cuando los ingresos cubren los costes, empezando a generar beneficios."
        },
        {
            question: "5. ¿Qué se analiza para tomar decisiones financieras en una empresa?",
            a: "Las predicciones astrológicas",
            b: "La información contable",
            c: "Los rumores del mercado",
            d: "Las opiniones en redes sociales",
            correct: "b",
            explanation: "La información contable es crucial para decisiones financieras."
        },
        {
            question: "6. ¿Qué elemento NO forma parte del patrimonio de una empresa?",
            a: "Los bienes",
            b: "Los derechos",
            c: "Las obligaciones",
            d: "Las mascotas de los empleados",
            correct: "d",
            explanation: "Las mascotas de los empleados no forman parte del patrimonio."
        },
        {
            question: "7. ¿Qué muestra el balance de situación?",
            a: "Los hobbies de los directivos",
            b: "La situación global de la empresa",
            c: "El menú del comedor",
            d: "Los proyectos futuros",
            correct: "b",
            explanation: "El balance de situación muestra la situación global financiera de la empresa."
        },
        {
            question: "8. ¿Qué es el Plan General de Contabilidad?",
            a: "Un manual de cocina",
            b: "Una novela de ficción",
            c: "El conjunto de normas contables",
            d: "Un álbum de música",
            correct: "c",
            explanation: "El PGC establece las normas contables para las empresas."
        },
        {
            question: "9. ¿Qué tipo de costes son independientes del nivel de producción?",
            a: "Costes variables",
            b: "Costes fijos",
            c: "Costes imaginarios",
            d: "Costes de las fiestas",
            correct: "b",
            explanation: "Los costes fijos no dependen de la cantidad producida."
        },
        {
            question: "10. ¿Qué documento no es obligatorio para pymes según el PGC?",
            a: "El estado de flujos de efectivo",
            b: "El balance",
            c: "La cuenta de pérdidas y ganancias",
            d: "La carta del restaurante",
            correct: "a",
            explanation: "El estado de flujos de efectivo no es obligatorio para pymes."
        },
        {
            question: "11. ¿Qué refleja el análisis financiero en una empresa?",
            a: "Las tendencias de moda en la oficina",
            b: "La eficiencia del sistema de calefacción",
            c: "El rendimiento económico y la capacidad para generar beneficios",
            d: "El color preferido del director financiero",
            correct: "c",
            explanation: "El análisis financiero evalúa la capacidad de la empresa para generar beneficios."
        },
        {
            question: "12. ¿Cuál es el propósito de la contabilidad de costes?",
            a: "Organizar eventos corporativos",
            b: "Determinar y controlar los costes de producción o servicios",
            c: "Decorar la oficina",
            d: "Elegir el menú del comedor de la empresa",
            correct: "b",
            explanation: "La contabilidad de costes ayuda a determinar y controlar los costes asociados a la producción."
        },
        {
            question: "13. ¿Qué documento contable muestra los ingresos y gastos de un período?",
            a: "La lista de deseos de Navidad",
            b: "El itinerario de viajes corporativos",
            c: "La cuenta de pérdidas y ganancias",
            d: "El calendario de cumpleaños de los empleados",
            correct: "c",
            explanation: "La cuenta de pérdidas y ganancias refleja los ingresos y gastos del período."
        },
        {
            question: "14. ¿Qué indica una alta liquidez en una empresa?",
            a: "Frecuentes fiestas de agua",
            b: "Una gran capacidad para cumplir con las obligaciones a corto plazo",
            c: "Una oficina con muchas plantas",
            d: "La preferencia por bebidas frías en la oficina",
            correct: "b",
            explanation: "Una alta liquidez señala la capacidad de la empresa para pagar deudas a corto plazo."
        },
        {
            question: "15. ¿Qué es una amortización en el contexto contable?",
            a: "Un tipo de ejercicio físico para los empleados",
            b: "Una técnica de meditación",
            c: "El proceso de distribuir el coste de un activo a lo largo de su vida útil",
            d: "Un evento anual de caridad",
            correct: "c",
            explanation: "La amortización es la distribución del coste de un activo durante su vida útil."
        },
        {
            question: "16. ¿Cómo se clasifican los activos en un balance de situación?",
            a: "Por colores",
            b: "Por nombres de mascotas",
            c: "En corrientes y no corrientes",
            d: "Por alturas",
            correct: "c",
            explanation: "Los activos se clasifican en corrientes (a corto plazo) y no corrientes (a largo plazo)."
        },
        {
            question: "17. ¿Qué representa el patrimonio neto en el balance de situación?",
            a: "El total de snacks en la oficina",
            b: "La suma de los activos menos las obligaciones",
            c: "Los títulos universitarios de los empleados",
            d: "Las preferencias musicales en el entorno laboral",
            correct: "b",
            explanation: "El patrimonio neto refleja los recursos propios de la empresa, activos menos pasivos."
        },
        {
            question: "18. ¿Qué método contable registra los ingresos y gastos cuando se realizan efectivamente?",
            a: "Método de la esperanza",
            b: "Método de acumulación",
            c: "Método de caja",
            d: "Método del viaje en el tiempo",
            correct: "c",
            explanation: "El método de caja registra los ingresos y gastos en el momento en que se reciben o pagan efectivamente."
        },
        {
            question: "19. ¿En qué se diferencia el activo corriente del activo no corriente?",
            a: "En su ubicación física en la empresa",
            b: "En su capacidad para ser convertido en efectivo dentro de un año",
            c: "En su color en los informes financieros",
            d: "En su popularidad entre los empleados",
            correct: "b",
            explanation: "El activo corriente puede ser convertido en efectivo dentro de un año, a diferencia del activo no corriente."
        },
        {
            question: "20. ¿Qué es una obligación en el contexto contable?",
            a: "Una meta de pasos diarios para los empleados",
            b: "Una deuda o compromiso financiero de la empresa",
            c: "Un acuerdo para organizar eventos de team building",
            d: "Una promesa de mejorar la decoración de la oficina",
            correct: "b",
            explanation: "Una obligación representa una deuda o compromiso financiero que la empresa debe cumplir."
        },
        {
            question: "21. ¿Qué objetivo tiene el fondo de maniobra en una empresa?",
            a: "Financiar las vacaciones de los empleados",
            b: "Invertir en startups tecnológicas",
            c: "Cubrir las necesidades operativas a corto plazo",
            d: "Comprar mobiliario de oficina de lujo",
            correct: "c",
            explanation: "El fondo de maniobra se utiliza para financiar las necesidades operativas a corto plazo de la empresa."
        },
        {
            question: "22. ¿Cuál es la función principal del análisis de ratios financieros?",
            a: "Determinar el mejor café para la oficina",
            b: "Evaluar la salud financiera y el rendimiento de la empresa",
            c: "Seleccionar nuevos colores para el logo de la empresa",
            d: "Organizar el archivo de documentos importantes",
            correct: "b",
            explanation: "El análisis de ratios financieros ayuda a evaluar la salud financiera y el rendimiento de la empresa."
        },
        {
            question: "23. ¿Cómo afecta la depreciación al valor de los activos fijos?",
            a: "Aumentando su valor estético",
            b: "Disminuyendo su valor contable a lo largo del tiempo",
            c: "Mejorando su funcionalidad",
            d: "Incrementando su popularidad entre los empleados",
            correct: "b",
            explanation: "La depreciación disminuye el valor contable de los activos fijos a lo largo del tiempo."
        },
        {
            question: "24. ¿Qué representa el flujo de efectivo en una empresa?",
            a: "La circulación de aire en la oficina",
            b: "Los cambios en el nivel de efectivo debido a actividades operativas, de inversión y financiación",
            c: "La distribución de bebidas en el refrigerador de la empresa",
            d: "El movimiento de personal entre diferentes departamentos",
            correct: "b",
            explanation: "El flujo de efectivo muestra los cambios en el nivel de efectivo de la empresa debido a actividades operativas, de inversión y de financiación."
        }          ,
        {
            question: "25. ¿Qué es una declaración de ingresos en contabilidad?",
            a: "Un documento que muestra los deseos financieros del CEO",
            b: "Una lista de los empleados que recibieron bonificaciones",
            c: "Un informe que detalla los ingresos, gastos y ganancias o pérdidas de una empresa",
            d: "Un registro de todas las llamadas telefónicas entrantes en la oficina",
            correct: "c",
            explanation: "Una declaración de ingresos es un informe financiero que detalla los ingresos, gastos y ganancias o pérdidas de una empresa durante un período específico."
        },
        {
            question: "26. ¿Qué papel juega la depreciación en la contabilidad?",
            a: "Reducir el valor de la moneda local",
            b: "Aumentar el valor de los activos tangibles con el tiempo",
            c: "Es una técnica para asignar el costo de un activo tangible sobre su vida útil",
            d: "Es un fondo para futuras fiestas de la empresa",
            correct: "c",
            explanation: "La depreciación es una técnica contable utilizada para asignar el costo de un activo tangible sobre su vida útil estimada, reflejando su consumo o pérdida de valor."
        },
        {
            question: "27. ¿Qué significa capitalización de mercado en el contexto de las acciones?",
            a: "El proceso de convertir texto en mayúsculas",
            b: "El valor total de mercado de las acciones de una empresa",
            c: "Una estrategia para aumentar el capital trabajando más horas",
            d: "El acto de poner sombreros en los logos de la empresa",
            correct: "b",
            explanation: "La capitalización de mercado se refiere al valor total de mercado de las acciones en circulación de una empresa, calculado multiplicando el precio actual de la acción por el número total de acciones en circulación."
        },
        {
            question: "28. ¿Qué es un bono en términos financieros?",
            a: "Una recompensa por buen comportamiento",
            b: "Una herramienta para cortar gastos",
            c: "Un título de deuda que indica que el emisor debe al tenedor una cantidad especificada",
            d: "Una estrategia para esquivar responsabilidades financieras",
            correct: "c",
            explanation: "Un bono es un instrumento financiero de deuda, a través del cual el emisor se compromete a pagar al tenedor del bono una cantidad especificada, más intereses, en una fecha futura."
        },
        {
            question: "29. ¿Qué es la diversificación en la inversión?",
            a: "La práctica de invertir solo en una empresa",
            b: "La estrategia de distribuir inversiones entre varios activos para reducir riesgos",
            c: "La concentración de todos los fondos en acciones tecnológicas",
            d: "Evitar inversiones en el mercado de valores",
            correct: "b",
            explanation: "La diversificación es una estrategia de inversión que implica repartir las inversiones entre diversos activos financieros para reducir el riesgo de pérdidas."
        },
        {
            question: "30. ¿Qué es una opción de compra en el mercado de valores?",
            a: "Una obligación de vender un activo a un precio específico",
            b: "El derecho, pero no la obligación, de comprar un activo a un precio específico",
            c: "Una recomendación para adquirir acciones de tecnología",
            d: "Un compromiso para asistir a reuniones de la junta",
            correct: "b",
            explanation: "Una opción de compra es un contrato que otorga al comprador el derecho, pero no la obligación, de comprar un activo a un precio específico dentro de un período determinado."
        },
        {
            question: "31. ¿Qué indica el ratio de endeudamiento sobre el capital propio?",
            a: "La relación entre el capital social de la empresa y sus deudas a largo plazo",
            b: "El número de empleados en relación con el número de gestores",
            c: "La proporción de deuda total de una empresa en comparación con su capital propio",
            d: "La eficiencia del sistema de calefacción en la oficina",
            correct: "c",
            explanation: "El ratio de endeudamiento sobre el capital propio mide la proporción de la deuda total de una empresa en relación con su capital propio, indicando el grado de apalancamiento financiero de la empresa."
        },
        {
            question: "32. ¿Qué es un análisis FODA en el contexto empresarial?",
            a: "Un tipo de café preferido por los emprendedores",
            b: "Una técnica de meditación para gerentes",
            c: "Una herramienta para analizar Fortalezas, Oportunidades, Debilidades y Amenazas",
            d: "Un código de vestimenta para reuniones de negocios",
            correct: "c",
            explanation: "El análisis FODA es una herramienta estratégica utilizada para identificar y analizar las Fortalezas, Oportunidades, Debilidades y Amenazas relacionadas con un proyecto o en un negocio."
        },
        {
            question: "33. ¿Qué representa el EBITDA en los informes financieros?",
            a: "Estilo y Buen Gusto en la Administración",
            b: "Energía, Brillo, Intuición, Talento y Ambición",
            c: "Ganancias antes de intereses, impuestos, depreciación y amortización",
            d: "Errores Básicos en la Interpretación de Datos Anuales",
            correct: "c",
            explanation: "EBITDA representa las Ganancias antes de intereses, impuestos, depreciación y amortización, y es un indicador de la rentabilidad operativa de una empresa."
        },
        {
            question: "34. ¿Qué es la valoración de empresas?",
            a: "Una ceremonia anual para premiar a las mejores empresas",
            b: "El proceso de determinar el valor económico de una empresa",
            c: "Una revista popular entre los empresarios",
            d: "El diseño de un nuevo logo para la empresa",
            correct: "b",
            explanation: "La valoración de empresas es el proceso de determinar el valor económico actual de una empresa, basado en el análisis de sus finanzas, mercado y potencial de crecimiento."
        },
        {
            question: "35. ¿Qué se entiende por 'mercado alcista' en el contexto de las inversiones?",
            a: "Un mercado en el que se venden productos orgánicos",
            b: "Una estrategia agresiva de marketing",
            c: "Un período de precios en aumento en el mercado de valores",
            d: "Una feria de empleo para startups",
            correct: "c",
            explanation: "Un mercado alcista se refiere a un período de tiempo en el que los precios de las acciones están en aumento, indicando optimismo y confianza en el mercado."
        },
        {
            question: "36. ¿Cuál es la diferencia entre liquidez y solvencia?",
            a: "Liquidez se refiere a la capacidad de una empresa para satisfacer sus deudas a corto plazo, mientras que solvencia se refiere a su capacidad a largo plazo",
            b: "Liquidez es la cantidad de líquido disponible en la oficina, y solvencia la cantidad de solventes",
            c: "Solvencia es un tipo de bebida, y liquidez es la facilidad con la que se sirve",
            d: "No hay diferencia; ambos términos significan lo mismo",
            correct: "a",
            explanation: "Liquidez se refiere a la capacidad de una empresa de convertir activos en efectivo para satisfacer sus obligaciones a corto plazo, mientras que solvencia es la capacidad de la empresa para cumplir con sus obligaciones financieras a largo plazo."
        },
        {
            question: "37. ¿Qué es el rendimiento por dividendo?",
            a: "Una tasa de interés que los bancos ofrecen por depósitos a plazo",
            b: "Una medida de cuánto paga una empresa en dividendos cada año en relación con el precio de su acción",
            c: "La cantidad de dividendo que se reinvierte automáticamente",
            d: "El total de ganancias generadas por ventas de acciones",
            correct: "b",
            explanation: "El rendimiento por dividendo es una medida que muestra cuánto paga una empresa en dividendos cada año en relación con el precio de su acción, indicando la rentabilidad de invertir en esas acciones."
        },
        {
            question: "38. ¿Qué es una auditoría financiera?",
            a: "Una fiesta donde se celebra el éxito financiero de la empresa",
            b: "Una revisión de las afirmaciones de moda en las finanzas",
            c: "Una evaluación independiente de los registros financieros de una empresa",
            d: "Una competencia entre departamentos para ahorrar dinero",
            correct: "c",
            explanation: "Una auditoría financiera es una evaluación independiente y objetiva de los registros financieros de una empresa, realizada para asegurar que la información financiera es presentada de manera justa y precisa."
        },
        {
            question: "39. ¿Qué representa el activo en el balance de situación?",
            a: "Las obligaciones financieras de la empresa",
            b: "Los recursos económicos que posee la empresa",
            c: "Los ingresos anuales de la empresa",
            d: "El capital aportado por los socios",
            correct: "b",
            explanation: "El activo en el balance de situación representa los recursos económicos que posee la empresa, es decir, todo aquello de valor que controla y puede utilizar para generar ingresos."
        },
        {
            question: "40. ¿Cuál es la función principal del Plan General de Contabilidad?",
            a: "Establecer las vacaciones de los empleados",
            b: "Definir el marco conceptual para la contabilidad en España",
            c: "Determinar los precios de venta de los productos",
            d: "Organizar las reuniones anuales de la empresa",
            correct: "b",
            explanation: "El Plan General de Contabilidad tiene como función principal definir el marco conceptual para la contabilidad en España, estableciendo los principios y normas que deben seguirse."
        },
        {
            question: "41. ¿Qué se entiende por pasivo no corriente?",
            a: "Las deudas y obligaciones a corto plazo",
            b: "Los activos que se liquidarán en más de un año",
            c: "Las deudas y obligaciones a largo plazo",
            d: "Los ingresos recibidos por adelantado",
            correct: "c",
            explanation: "El pasivo no corriente se refiere a las deudas y obligaciones de la empresa que tienen un vencimiento superior a un año, representando las obligaciones a largo plazo."
        },
        {
            question: "42. ¿Qué es el fondo de maniobra?",
            a: "Un préstamo bancario para nuevas inversiones",
            b: "La diferencia entre el activo corriente y el pasivo corriente",
            c: "El capital destinado a la compra de maquinaria",
            d: "Los beneficios retenidos para dividendos",
            correct: "b",
            explanation: "El fondo de maniobra es la diferencia entre el activo corriente y el pasivo corriente, y refleja la capacidad de la empresa para hacer frente a sus obligaciones a corto plazo con sus activos líquidos."
        },
        {
            question: "43. ¿Qué papel juegan las amortizaciones en la contabilidad?",
            a: "Aumentar el valor de los activos",
            b: "Disminuir las obligaciones financieras",
            c: "Reflejar la pérdida de valor de los activos fijos",
            d: "Incrementar los ingresos operativos",
            correct: "c",
            explanation: "Las amortizaciones juegan un papel crucial en la contabilidad al reflejar la pérdida de valor de los activos fijos con el tiempo, distribuyendo su coste a lo largo de su vida útil."
        },
        {
            question: "44. ¿Qué significa la 'masa patrimonial' en contabilidad?",
            a: "La totalidad de las deudas de la empresa",
            b: "El conjunto de elementos con características económicas similares",
            c: "Los activos líquidos disponibles para inversión",
            d: "Los ingresos anuales antes de impuestos",
            correct: "b",
            explanation: "En contabilidad, la 'masa patrimonial' se refiere al conjunto de elementos del patrimonio de la empresa que tienen características económicas similares, agrupándose para su análisis y gestión."
        },
        {
            question: "45. ¿Qué se entiende por 'periodificación contable'?",
            a: "El cálculo de los dividendos a distribuir",
            b: "La asignación de ingresos y gastos al período en que realmente ocurren",
            c: "La renovación de los contratos de trabajo",
            d: "La planificación de las campañas publicitarias",
            correct: "b",
            explanation: "La 'periodificación contable' se refiere a la asignación de ingresos y gastos al período contable en que realmente se incurren, independientemente de cuándo se realice el pago o cobro."
        },
        {
            question: "46. ¿Cuál es el propósito de la clasificación de las cuentas contables?",
            a: "Determinar la cantidad de impuestos a pagar",
            b: "Facilitar la preparación de los estados financieros",
            c: "Calcular el salario de los empleados",
            d: "Establecer la jerarquía organizacional de la empresa",
            correct: "b",
            explanation: "La clasificación de las cuentas contables ayuda a organizar la información financiera, facilitando la preparación de los estados financieros y la toma de decisiones."
        },
        {
            question: "47. ¿Qué refleja el activo en el balance de situación?",
            a: "Las deudas y obligaciones de la empresa",
            b: "El capital aportado por los socios",
            c: "Los recursos económicos controlados por la empresa",
            d: "Los ingresos obtenidos durante el ejercicio",
            correct: "c",
            explanation: "El activo en el balance de situación refleja los recursos económicos controlados por la empresa, que se espera que produzcan beneficios futuros."
        },
        {
            question: "48. ¿Qué caracteriza a una cuenta de pasivo?",
            a: "Representa las inversiones de los propietarios en la empresa",
            b: "Incluye los ingresos recibidos por adelantado",
            c: "Registra los recursos económicos de la empresa",
            d: "Refleja las deudas y obligaciones de la empresa",
            correct: "d",
            "explanation": "Una cuenta de pasivo caracteriza las deudas y obligaciones de la empresa, es decir, lo que la empresa debe a terceros."
        },
        {
            question: "49. ¿En qué consiste el principio de prudencia contable?",
            a: "Registrar los ingresos solo cuando se cobran",
            b: "No subestimar los ingresos ni sobreestimar los gastos",
            c: "Subestimar los ingresos y sobreestimar los gastos",
            d: "Registrar los gastos solo cuando se pagan",
            correct: "c",
            explanation: "El principio de prudencia contable consiste en subestimar los ingresos y sobreestimar los gastos para no inflar los beneficios de la empresa."
        },
        {
            question: "50. ¿Qué indica el patrimonio neto en un balance de situación?",
            a: "La suma total de activos y pasivos",
            b: "Los recursos propios de la empresa, diferenciados de sus deudas",
            c: "El total de deudas y obligaciones financieras",
            d: "Los ingresos totales de la empresa durante el ejercicio",
            correct: "b",
            explanation: "El patrimonio neto indica los recursos propios de la empresa, representando la diferencia entre los activos y los pasivos, es decir, lo que la empresa realmente posee."
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