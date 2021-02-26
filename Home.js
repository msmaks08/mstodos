import AllTodo from "./AllTodo";


const Home = () => {


  return (
      <div className="home">
        <div className="links">
          <h3>
            <a className="all" href="/">All</a>
            <a className="rest" href="/active">Active</a>
            <a className="rest" href="/done">Done</a>
          </h3>
        </div>
        <AllTodo/>
      </div>
  );
}
 
export default Home;
