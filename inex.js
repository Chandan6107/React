const heading=React.createElement("h1",{
    id: "hello",
   },"Hi");
   const heading2=React.createElement("h2",{
    id: "hello",
   },"Hi");
   const Container=React.createElement("div",{
    id: "Container",
   },[heading,heading2]);
   const root= ReactDOM.createRoot(document.getElementById("root"));
   console.log(heading);
   root.render(Container);