import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Committees() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     // Variants will be filled only on devices with a screen wider than 1366 pixels
     let variants = {};
     if (window.innerWidth > 1366) {
          variants = {
               small: { opacity: 0.5, scale: 0.8 },
               normal: { opacity: 1, scale: 1 },
               duration: { duration: 0.5 },
          }
     }

     return (
          <motion.div className="page-wrapper"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
          >

               {/* Page title */}
               <h1 className="page-title">
                    <p className="page-title-p">
                         Committees
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1>

               <div className="page-info">
                    <div className="info-box">
                         <div className="info-text">
                              <h1 className="info-title">Organizing Committee</h1>
                              <ul>
                                   <li>Margot Paulino Zunini - Chair</li>
                                   <li>Antonella Alba - Secretaria </li>
                                   <li>Nathalia Aceval</li>
                                   <li>Andres Camilo Ballesteros</li>
                                   <li>Jorge Cantero</li>
                                   <li>Pablo Dans</li>
                                   <li>Leonardo García</li>
                                   <li>Aline Katz</li>
                                   <li>Rodrigo Moreira</li>
                                   <li>Martin Soñora</li>
                              </ul>
                         </div>
                    </div>

                    <motion.div className="info-box"
                         variants={variants} initial="small" whileInView="normal" transition="duration" viewport={{ once: true }}
                    >
                         <div className="info-text">
                              <h1 className="info-title">Local Scientific Committee</h1>
                              <ul>
                                   <li>Laura Coitiño</li>
                                   <li>Pablo Dans</li>
                                   <li>Pablo Denis</li>
                                   <li>Ricardo Faccio</li>
                                   <li>Alvaro Mombrú</li>
                                   <li>Sergio Pantano</li>
                                   <li>Marc Segovia</li>
                                   <li>Oscar Ventura</li>
                                   <li>Mauricio Vega</li>
                                   <li>Nicolás Veiga</li>
                                   <li>Ari Zeida</li>
                              </ul>
                         </div>
                    </motion.div>

                    <motion.div className="info-box"
                         variants={variants} initial="small" whileInView="normal" transition="duration" viewport={{ once: true }}
                    >
                         <div className="info-text">
                              <h1 className="info-title">International Scientific Committee (preliminary)</h1>
                              <ul>
                                   <li>Silvia Casassa</li>
                                   <li>Andrea Cavalli</li>
                                   <li>Marco Chaer Nascimento</li>
                                   <li>Benoît Champagne</li>
                                   <li>Christopher Chipot</li>
                                   <li>Danilo Fernando González Nilo</li>
                                   <li>Alfonso Hernández Laguna</li>
                                   <li>Francesc Illas</li>
                                   <li>Elson Longo</li>
                                   <li>Efracio Mamani Flores</li>
                                   <li>Liliana Mammino</li>
                                   <li>Chérif F. Matta</li>
                                   <li>Joao Batista Lopes Martins</li>
                                   <li>Gabriel Merino</li>
                                   <li>Gian Pietro Miscione</li>
                                   <li>Margot Paulino</li>
                                   <li>Fabio Polticelli</li>
                                   <li>Maria João Ramos</li>
                                   <li>Andrés Reyes</li>
                                   <li>Julio Sambrano</li>
                                   <li>Orlando Tapia</li>
                                   <li>Alejandro Toro-Labbé</li>
                                   <li>Javier Torres</li>
                                   <li>Mario Ernesto Valdés</li>
                              </ul>
                         </div>
                    </motion.div>
               </div>

               <Footer />
          </motion.div>
     )
}
