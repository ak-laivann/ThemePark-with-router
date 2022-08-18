
const Tab2 = () => {
    console.log("inside tab2");
    
    return (
        <div>
            <div className="card">
                <div className="card-title">
                    <h1 className="card-text">Choose your rides!</h1>
                    <b><p className="card-text"> Reminder !</p> <span className="card-text">persons younger than 18 years are restricted from specific rides, read carefully the instructions before filinputng the form</span></b>
                </div>
                <div className="card-body">
                    <div className="form-check"><form>
                        <input className="form-check-input" type="radio" />ride 1  &emsp;&emsp;&emsp;&emsp;  <span> <input className="form-check-input" type="radio" />ride 8 </span>
                        <input className="form-check-input" type="radio" />ride 2  &emsp;&emsp;&emsp;&emsp;  <span> <input className="form-check-input" type="radio" />ride 9 </span>
                        <input className="form-check-input" type="radio" />ride 3  &emsp;&emsp;&emsp;&emsp;  <span> <input className="form-check-input" type="radio" />ride 10 </span>
                        <input className="form-check-input" type="radio" />ride 4  &emsp;&emsp;&emsp;&emsp;  <span> <input className="form-check-input" type="radio" />ride 11 </span>
                        <input className="form-check-input" type="radio" />ride 5  &emsp;&emsp;&emsp;&emsp;  <span> <input className="form-check-input" type="radio" />ride 12 </span>
                        <input className="form-check-input" type="radio" />ride 6  &emsp;&emsp;&emsp;&emsp;  <span> <input className="form-check-input" type="radio" />ride 13 </span>
                        <input className="form-check-input" type="radio" />ride 7  &emsp;&emsp;&emsp;&emsp;  <span> <input className="form-check-input" type="radio" />ride 14 </span>
                        </form></div>
                </div>
                <div className="card-footer">
                    <h2 className="card-text">Thanks for visiting! waiting for you</h2>
                </div>
            </div>
        </div>
    );
};

export default Tab2;