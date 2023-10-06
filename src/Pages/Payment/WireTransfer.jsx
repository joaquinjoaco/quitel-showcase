import Footer from "../../components/Footer/Footer";
import CopyButton from "../../components/CopyButton/CopyButton";

export default function WireTransfer() {
     // Scrolls to top when rendered.
     // Otherwise when switching routes the user would remain at the same Y position in the window.
     window.scrollTo(0, 0);

     return (
          <div className="page-wrapper">

               {/* Page title */}
               < h1 className="page-title" >
                    <p className="page-title-p">
                         Wire transfer
                    </p>
                    <p className="page-title-p">
                         QUITEL/CHITEL
                    </p>
               </h1 >

               <div className="page-info">
                    <div className="info-box">
                         <div className="info-text">
                              <h1 className="info-title fees paypal">Registration fee payment</h1>
                              <div className="line">
                                   <p>
                                        The fees are the exact same ones specified on the previous page.
                                        <br />
                                        <br />
                                        Please kindly specify in the wire transfer which fees are being paid. We thank you in advance.
                                        <br />
                                        *Right after the fees you will find the different bank accounts and their corresponding details.
                                        <br />
                                        <br />
                                   </p>
                              </div>
                         </div>

                         {/* Until June 30th */}
                         <div className="info-box">
                              <h1 className="info-title fees">Early, until August 18th.</h1>
                              <div className="info-text">
                                   {/* Level */}
                                   <div className="line heading">
                                        <p>Level</p>
                                        <p>USD</p>
                                   </div>
                                   <div className="line">
                                        <p>Postdocs / Researchers / Professors</p>
                                        <p>405</p>
                                   </div>
                                   <div className="line">
                                        <p>Master / PhD Students</p>
                                        <p>270</p>
                                   </div>
                                   <div className="line">
                                        <p>Undergraduate Student</p>
                                        <p>225</p>
                                   </div>
                                   {/* Additional */}
                                   <div className="line heading second">
                                        <p>Additional</p>
                                        <p></p>
                                   </div>
                                   <div className="line">
                                        <p>Accompanying</p>
                                        <p>180</p>
                                   </div>
                                   <div className="line">
                                        <p>Closing dinner</p>
                                        <p>40</p>
                                   </div>
                              </div>
                         </div>

                         {/* From July 1st */}
                         <div className="info-box">
                              <h1 className="info-title fees">From August 18th.</h1>
                              <div className="info-text">
                                   {/* Level */}
                                   <div className="line heading">
                                        <p>Level</p>
                                        <p>USD</p>
                                   </div>
                                   <div className="line">
                                        <p>Postdocs / Researchers / Professors</p>
                                        <p>450</p>
                                   </div>
                                   <div className="line">
                                        <p>Master / PhD Students</p>
                                        <p>300</p>
                                   </div>
                                   <div className="line">
                                        <p>Undergraduate Student</p>
                                        <p>250</p>
                                   </div>
                                   {/* Additional */}
                                   <div className="line heading second">
                                        <p>Additional</p>
                                        <p></p>
                                   </div>
                                   <div className="line">
                                        <p>Accompanying</p>
                                        <p>200</p>
                                   </div>
                                   <div className="line">
                                        <p>Closing dinner</p>
                                        <p>40</p>
                                   </div>
                              </div>
                         </div>

                    </div>

                    {/* Payment */}

                    {/* BROU */}
                    <div className="info-box">
                         <div className="info-text">
                              <div className="line heading">
                                   <p>BROU Bank (only amounts greater than U$S 100)</p>
                              </div>
                              <ul>
                                   <li>
                                        <div className="line">
                                             <p>XXXXXXXXXXXX ($ Uruguayan Peso)</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>XXXXXXXXXXXX (U$S United States Dollar)</p>  <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                              </ul>

                              <br />

                              <p><u>Details:</u></p>
                              <ul>
                                   <li>
                                        <div className="line">
                                             <p>Account holder name: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>E-mail: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>SWIFT: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>Address: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>Bank name: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>City: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>Country: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>

                    {/* Santander  */}
                    <div className="info-box">
                         <div className="info-text">
                              <div className="line heading">
                                   <p>Santander Bank (All amounts)</p>
                              </div>
                              <ul>
                                   <li>

                                        <div className="line">
                                             <p>XXXXXXXXXXXX ($ Uruguayan Peso)</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>XXXXXXXXXXXX (U$S United States Dollar)</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>XXXXXXXXXXXX (€ Euro)</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                              </ul>

                              <br />

                              <p><u>Details:</u></p>
                              <ul>
                                   <li>
                                        <div className="line">
                                             <p>Account holder name: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>E-mail: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>SWIFT: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>Bank branch: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>Address: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>Bank name: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>City: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                                   <li>
                                        <div className="line">
                                             <p>Country: XXXXXXXXXXXX</p> <CopyButton text="XXXXXXXXXXXX" />
                                        </div>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>

               <Footer />
          </div >
     )
}
