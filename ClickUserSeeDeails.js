// 01. Create a detailsHandle in fetching page i mean all data loaded page 
const [users, setUsers] = useState([]);
const [selected, setSelected] = useState(false)
const handleDetailUser = id => {
    setSelected(true)

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setDetail(res.data))
}




// 02. send details state to details page 
// fetch data ar niche 
<div className="">
    {
        selected ? <Details detail={detail} /> : <p className='text-center font-bold text-3xl'>Select Any Product</p>
    }
</div>





// 03.recive detailsHandle single data page 
// 04. and onclick setup by id
onClick = {() => handleDetailUser(id)}




// 05. recive details and ans show are you win 






