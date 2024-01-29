npm create vite@latest
-Project name :
-Framework : React
-Varient : JavaScript

------- If the folder doesnot contains node_modules,
then npm install
- npm install
-----------------------------------------------------------

to run 
- npm run dev


In vite the "JS" file are manually added in the index.html file 
    <script type="module" src="/src/main.jsx"></script>


## Norms
- Function name must be in Uppercase
- File name should be in Uppercase
- File name should be ".jsx" only

## Evaluated expression
function App() {
  const userName = "Shiva Shambhoo"
  return (
    <>  
    {/* Here the {userName} is called expression ie evaluated expression , same like `${}`*/}
      <h1>Welcome Singh Rajput || {userName} </h1>
      <Chai />
    </>
    
  )
}

## From main.jsx
    - We can define a function and  pass the function directly 


const MyApp = ()=>{
  return(
    <div>
      <h1>Custom App || Singh Rajput </h1>
    </div>
  )
}

// 1st Way 
ReactDOM.createRoot(document.getElementById('root')).render(
    MyApp()
)

// 2nd Way
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <App />
      <MyApp />
    </>
)

