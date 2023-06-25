/* eslint react/prop-types: 0 */
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalTest({ feeSelection }) {

     return (
          <PayPalScriptProvider className="paypal-buttons"
          // options={{ "client-id": import.meta.env.VITE_REACT_CLIENT_ID }}
          >
               {feeSelection == "postdocs" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Postdocs / Researchers / Professors",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "0",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }

               {feeSelection == "phdstudents" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Master / PhD Students",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "0",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }

               {feeSelection == "undergraduates" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Undergraduate Students",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "0",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }

               {feeSelection == "accompanying" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Accompanying",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "0",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }
               {feeSelection == "dinner" ? (
                    <PayPalButtons className="paypal-buttons"
                         createOrder={(data, actions) => {
                              return actions.order.create({
                                   purchase_units: [
                                        {
                                             description: "Dinner",
                                             amount: {
                                                  currency_code: "USD",
                                                  value: "0",
                                             },
                                        },
                                   ],
                              });
                         }}
                    />
               ) : (null)
               }

          </PayPalScriptProvider>
     );
}
