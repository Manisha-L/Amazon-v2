import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSession, getSession } from "next-auth/react";
import moment from "moment";
import db from "../../firebase";
import Order from "../../src/components/Order";

function orders(props) {
  // const session = useSession();
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      // const context = props.context;
      const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
      // const session = await getSession(context);
      const session = props.session;
      console.log("session", session, props);
      if (!props.user.email) {
        return {
          props: { orders: [] },
        };
      }
      const stripeOrders = await db
        .collection("users")
        .doc(props.user.email)
        .collection("orders")
        .orderBy("timestamp", "desc")
        .get();
      console.log("Manisha", stripeOrders.docs);

      const tst = stripeOrders.docs.map((order) => ({
        id: order.id,
        amount: order.data().amount,
        amount_shipping: order.data().amount_shipping,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(),
        // items: (
        //   await stripe.checkout.sessions.listLineItems(order.id, {
        //     limit: 100,
        //   })
        // ).data,
      }));
      console.log("tst", tst);
      // )
      //   .then((res) => {
      //     console.log("orderlocal", res);
      //   })
      //   .catch((e) => {
      //     console.log("ordersError", e);
      //   });

      setOrders(tst);
    })();
  }, []);

  console.log(orders);
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="pt-28 w-full xs:w-[50%] h-screen ">
          <h1 className="font-bold text-xl">Your Orders</h1>
          <hr className=" mt-1 font-semibold border border-yellow-400" />
          {session ? (
            <h1 className=" mt-1 font-semibold">{orders.length} orders</h1>
          ) : (
            <h1>Please sign in to see your orders</h1>
          )}

          {orders.map((order) => (
            <Order
              id={order.id}
              amount={order.amount}
              amount_shipping={order.amount_shipping}
              images={order.images}
              timestamp={order.timestamp}
              items={order.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);
  console.log("check-session", session);
  // const session = await getSession(context);
  // if (!session) {
  //   return {
  //     props: { orders: [] },
  //   };
  // }
  // const stripeOrders = await db
  //   .collection("users")
  //   .doc(session.user.email)
  //   .collection("orders")
  //   .orderBy("timestamp", "desc")
  //   .get();
  // console.log("Manisha", stripeOrders);

  // const orders = await Promise.all(
  //   stripeOrders.docs.map(async (order) => ({
  //     id: order.id,
  //     amount: order.data().amount,
  //     amount_shipping: order.data().amount_shipping,
  //     images: order.data().images,
  //     timestamp: moment(order.data().timestamp.toDate()).unix(),
  //     items: (
  //       await stripe.checkout.sessions.listLineItems(order.id, {
  //         limit: 100,
  //       })
  //     ).data,
  //   }))
  // );
  return {
    // props: { orders },
    props: {
      session,
      user: session.user,
    },
  };
}
