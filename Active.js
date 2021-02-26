import AllTodo from "./AllTodo";

const Active = () => {
  return (
    <div className="home">
        <div className="links">
            <h3>
                <a className="rest" href="/">All</a>
                <a className="active" href="/active">Active</a>
                <a className="rest" href="/done">Done</a>
            </h3>
        </div>
        <div>
            <AllTodo/>
        </div>
    </div>
);
}
 
export default Active;