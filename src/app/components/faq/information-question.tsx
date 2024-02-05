"use client";
import React, { useState } from "react";

const InformationQuestion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  console.log("This is index", activeAccordion);
  return (
    <div className="p-8 border-2 border-gray-100">
      <div>
        <h3 className="text-sm text-gray-400">INFORMATION QUESTIONS</h3>
        <h2 className="text-2xl text-secondary mt-2">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="">
          <div>
            <h2 className="text-lg text-primary mt-6 -mb-2 ">ORDERS</h2>
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-semibold text-left text-secondary hover:text-primary  border-b border-gray-200  dark:text-secondary gap-3"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeAccordion === index}
                    aria-controls={`accordion-flush-body-${index + 1}`}
                  >
                    <span className="">
                      {index === 0
                        ? "How can I place an order?"
                        : index === 1
                        ? "How do I know my order has been received?"
                        : index === 2
                        ? "Can I change my order delivery address?"
                        : index === 3
                        ? "Can I amend or cancel my order?"
                        : ""}
                    </span>
                    <svg
                      className={`w-3 h-3 rotate-${
                        activeAccordion === index ? "180" : "0"
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index + 1}`}
                  className={`${
                    activeAccordion === index ? "block" : "hidden"
                  }`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-200">
                    {/* Content for each accordion */}
                    {activeAccordion === 0 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          You can place an order online; you will be required to
                          create an account to register with us. It’s super easy
                          to create an account using a valid email account. OR
                          you can order as a guest.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Using your account, you’ll be able to view your
                          purchase history, see order updates, save your address
                          details for next time, and create a Wishlist of
                          must-have items.
                        </p>
                      </>
                    ) : activeAccordion === 1 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Once you’ve completed your order online, you’ll
                          receive an order confirmation email at the same time.
                          If you don’t receive an order confirmation email
                          within 24 hours of ordering, we suggest you check your
                          email spam filter and junk folder in case our email
                          has been directed there.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          If this isn’t the case, please contact us at (09) 620
                          1000 and we’ll look into this for you.
                        </p>
                      </>
                    ) : activeAccordion === 2 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          If your order hasn’t been dispatched, we may be able
                          to change the delivery address.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Please note that if you want us to change Click &
                          Collect order to shipping, you will have to pay the
                          shipping fee. Our team will advise you of the shipping
                          fee.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          For all requests to change a delivery address or
                          cancel an order so that you can place the correct
                          order please email us at sales@serandib.co.nz or phone
                          (09) 620 1000. Our contact hours are Monday to Sunday
                          from 9 am to 5 pm.
                        </p>
                      </>
                    ) : activeAccordion === 3 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Once an order is placed, we’re unable to make any
                          changes to it, including changing items and
                          quantities, applying a discount code, or removing
                          items from your order. In case you need to cancel the
                          order, you may be able to cancel your order if it
                          hasn’t been dispatched. If you need any help, please
                          call our team on (09) 620 1000 or email
                          sales@serandib.co.nz.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Please note: When you place an order with us, you will
                          be charged for your purchase as soon as you click the
                          PLACE ORDER (except bank transfer) button in the
                          checkout. An order confirmation will be sent via email
                          to confirm your order and payment. If you cancel your
                          order, it may take up to 14 business days for your
                          bank or card issuer to process the refund (minus small
                          credit card charges) to make your funds available to
                          you again.
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg text-primary mt-6 -mb-2 ">PAYMENT</h2>
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-semibold text-left text-secondary hover:text-primary  border-b border-gray-200  dark:text-secondary gap-3"
                    onClick={() => toggleAccordion(index + 4)}
                    aria-expanded={activeAccordion === index + 4}
                    aria-controls={`accordion-flush-body-${index + 5}`}
                  >
                    <span>
                      {index === 0
                        ? "What payment methods do you offer?"
                        : index === 1
                        ? "When will I be charged for my online order?"
                        : index === 2
                        ? "What currency is the website in?"
                        : index === 3
                        ? "How do I use my coupon code?"
                        : index === 4
                        ? "Why doesn't my coupon code work?"
                        : index === 5
                        ? "I forgot to apply my discount code, can you refund me the difference?"
                        : ""}
                    </span>
                    <svg
                      className={`w-3 h-3 rotate-${
                        activeAccordion === index + 4 ? "180" : "0"
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index + 5}`}
                  className={`${
                    activeAccordion === index + 4 ? "block" : "hidden"
                  }`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-200">
                    {/* Content for each accordion */}
                    {activeAccordion === 4 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          We offer a variety of payment options for our
                          customers. When shopping online we accept debit cards
                          and major credit cards, VISA, and MasterCard. We do
                          not hold or save any of your credit card details as
                          you will be transferred directly to Worldline
                          (formally “Paymark”) payment Gateway platform, who we
                          use as our Payment Gateway provider.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          We offer you Online EFTPOS which enables you to pay
                          online with your smart phone directly from your bank
                          app. Not only is it the safer and easier way to pay
                          online, it’s also one of the most secure payment
                          methods available today as you never need to expose
                          your payment or banking credentials.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Direct bank transfer is also available for you to
                          transfer money to our nominated bank account that
                          appeared on the website. (Please note your order will
                          be processed only once funds realise to our account)
                        </p>
                      </>
                    ) : activeAccordion === 5 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          You will be charged for your purchase as soon as you
                          click the PLACE ORDER button in the checkout. An order
                          confirmation will be sent via email to confirm your
                          order and payment.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Please be aware we take fraud seriously. All credit
                          card and debit card holders are subject to validation
                          and authorization through our Payment Gateway
                          providers.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          A GST tax invoice will be sent to you via email once
                          your order is complete. This will include all items
                          successfully dispatched to you as part of the order.
                          If for any reason we are unable to fulfil your order
                          in full, you will be offered store credits to use
                          towards another purchase or refunded back to your
                          original payment method for any items you have not
                          received.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          For credit or debit cards it may take up to 14 working
                          days for the refund to appear back in your account
                          depending on bank processing times.
                        </p>
                      </>
                    ) : activeAccordion === 6 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          All prices displayed are GST inclusive and displayed
                          in NZD.
                        </p>
                      </>
                    ) : activeAccordion === 7 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          You need to enter your coupon code in the checkout. On
                          top of the checkout page, you’ll see a field with the
                          heading “Have a coupon? Click here to enter your
                          code.” Enter the coupon code in the field and click
                          “Apply Coupon.” You must enter the coupon code when
                          you checkout as it cannot be applied after you’ve
                          completed your order..
                        </p>
                      </>
                    ) : activeAccordion === 8 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          You may not have entered your coupon code during the
                          checkout process. You may have used the coupon code on
                          a previous order. The coupon code may have expired.
                        </p>
                      </>
                    ) : activeAccordion === 9 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          No. Unfortunately, we cannot amend orders after they
                          have been placed. If you forget to apply your coupon
                          code, you will either have to request to cancel your
                          order and place it again or you will need to wait and
                          use your coupon code on your next order.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Please note we can aim to pack and dispatch orders as
                          quickly as possible. We cannot guarantee that we will
                          be able to cancel your order if your order has already
                          started processing.
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg text-primary mt-6 -mb-2 ">DELIVERY</h2>
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-semibold text-left text-secondary hover:text-primary  border-b border-gray-200  dark:text-secondary gap-3"
                    onClick={() => toggleAccordion(index + 10)}
                    aria-expanded={activeAccordion === index + 10}
                    aria-controls={`accordion-flush-body-${index + 5}`}
                  >
                    <span>
                      {index === 0
                        ? "When will I receive my order?"
                        : index === 1
                        ? "What is your delivery fee?"
                        : index === 2
                        ? "How can I track my order?"
                        : index === 3
                        ? "I haven't received my order, what should I do?"
                        : ""}
                    </span>
                    <svg
                      className={`w-3 h-3 rotate-${
                        activeAccordion === index + 10 ? "180" : "0"
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index + 5}`}
                  className={`${
                    activeAccordion === index + 10 ? "block" : "hidden"
                  }`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-200">
                    {/* Content for each accordion */}
                    {activeAccordion === 10 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Most orders can be expected to take 1-3 business days
                          to process and ship. This is counted from the first
                          business day following the day that you place your
                          order. Rural addresses may take longer so allow for
                          3-5 business days.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Orders usually process on same day if received before
                          12.00 noon during the business days. If orders receive
                          from Friday afternoon to Sunday will process and
                          dispatch on Monday.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Updates, package details and tracking links will be
                          sent to you via email. If for any reason we feel that
                          your order may end up delayed, you will be contacted
                          via email during the delivery period to keep you
                          updated.
                        </p>
                      </>
                    ) : activeAccordion === 11 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Shipping charges will be calculated automatically when
                          you complete placing the order. It will depend on the
                          items added, weight and the shipping address. The
                          courier company charges are based on cubic volume of
                          single carton (width, height & weight). If the order
                          do not fit in to one carton, there will be an extra
                          charges for every additional cartons on a same basis.
                          Our team always tried to fill all the items in the
                          order into a single carton to reduce cost to our
                          customers, except for very large orders. We take every
                          effort to provide accurate shipping charges but this
                          may very as it is difficult to get 100% correct as
                          actual charges are calculated via respective courier
                          systems, and not all courier company systems are fully
                          integrated with our site. Most of the time charges get
                          calculated correctly, but there are exceptions based
                          on certain destinations as some courier companies
                          charge differently. Additional shipping charges may
                          apply for the rural delivery addresses at the time we
                          book the delivery.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          If any additional charges occurred due to above
                          reasons, during the process our team will contact you
                          accordingly. This will be done prior to dispatch your
                          order.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          It is important note that the courier charges are
                          calculated by our courier service providers through
                          their systems. We won’t have any authority or control
                          over delivery fees. For all the orders with delivery
                          charges (except for local deliveries-Auckland region),
                          we take three different quotes from three separate
                          courier companies and select the lowest & reliable
                          option available for the destination for the benefit
                          of our customers.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          New Zealand Same Day Click & Collect Orders from
                          stores are FREE OF CHARGE
                        </p>
                      </>
                    ) : activeAccordion === 12 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          When your order is dispatched, you’ll be sent a
                          dispatch confirmation email informing you that your
                          order has been dispatched along with the tracking
                          number and link.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          The delivery target is 1-2 business days following
                          dispatch confirmation. Rural addresses can add 1-3
                          days to the delivery time.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          You can track your parcels on the courier websites
                          with a track and trace link sent to you.
                        </p>
                      </>
                    ) : activeAccordion === 13 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Please go to the courier website and enter the
                          tracking number into the track & trace service to find
                          the latest status of your parcel. The tracking number
                          can be found on your dispatch email.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          If after reviewing the tracking details of your parcel
                          you still have a query regarding the delivery status,
                          in the first instance please contact the courier
                          company help desk for more information.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Should you need any further assistance, please contact
                          our team at sales@serandib.co.nz or phone (09) 620
                          1000, Monday to Sunday, 9 am to 5 pm.
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg text-primary mt-6 -mb-2 ">
              CLICK & COLLECT
            </h2>
            {Array.from({ length: 1 }, (_, index) => (
              <div key={index}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-semibold text-left text-secondary hover:text-primary  border-b border-gray-200  dark:text-secondary gap-3"
                    onClick={() => toggleAccordion(index + 14)}
                    aria-expanded={activeAccordion === index + 14}
                    aria-controls={`accordion-flush-body-${index + 5}`}
                  >
                    <span>
                      {index === 0
                        ? "Is there a charge to collect from a store?"
                        : ""}
                    </span>
                    <svg
                      className={`w-3 h-3 rotate-${
                        activeAccordion === index + 10 ? "180" : "0"
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index + 5}`}
                  className={`${
                    activeAccordion === index + 14 ? "block" : "hidden"
                  }`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-200">
                    {/* Content for each accordion */}
                    {activeAccordion === 14 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          No Charges applied. Same Day Click & Collect orders
                          must be placed by 3 pm. We will email or text you when
                          your order is packed and ready to collect.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Please don’t head into the store until you receive
                          your Ready to Collect email or text. On the rare
                          occasion that there is a stock inaccuracy, one of our
                          team will be in contact to discuss alternative options
                          with you.
                        </p>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          Orders need to be collected during store opening
                          hours. Monday to Sunday, 9 am to 5 pm)
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg text-primary mt-6 -mb-2 ">
              RETURN & EXCHANGE
            </h2>
            {Array.from({ length: 1 }, (_, index) => (
              <div key={index}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-semibold text-left text-secondary hover:text-primary  border-b border-gray-200  dark:text-secondary gap-3"
                    onClick={() => toggleAccordion(index + 15)}
                    aria-expanded={activeAccordion === index + 15}
                    aria-controls={`accordion-flush-body-${index + 5}`}
                  >
                    <span>
                      {index === 0
                        ? "Can I return product purchased online to the store?"
                        : ""}
                    </span>
                    <svg
                      className={`w-3 h-3 rotate-${
                        activeAccordion === index + 10 ? "180" : "0"
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                      style={{ transition: "transform 0.3s ease" }}
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-flush-body-${index + 5}`}
                  className={`${
                    activeAccordion === index + 15 ? "block" : "hidden"
                  }`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-200">
                    {/* Content for each accordion */}
                    {activeAccordion === 15 ? (
                      <>
                        <p className="mb-2 text-gray-500 text-sm dark:text-gray-400">
                          We want you to be happy with your purchase. (Our
                          return policy is in line with the ruling given by NZ
                          Govt Commerce Commission. Not for change of mind) We
                          will gladly exchange or refund the unused product in
                          its original condition, with the safety seals attached
                          within 3 days of the delivery date, accompanied by the
                          original receipt. All refunds will be credited to the
                          original form of payment. The delivery fee is
                          non-refundable.
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationQuestion;
