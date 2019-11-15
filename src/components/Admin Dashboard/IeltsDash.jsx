import React, { Fragment, useState, useEffect} from "react"
import Dashboard from "../Admin Dashboard/Dashboard"
import API from "../../services/"
import Swal from 'sweetalert2'
import '../Courses/stylecourses.css'
import '../Header/stylenavbar.css'

export const IeltsDash = () => {

    const [data, setData] = useState('')
    const [edit, setEdit] = useState(null)
    const [vedit, setVedit] = useState()
    const [input, setInput] = useState({
      subject_id:'',
      title:'',
      episode:'',
      link:'',
      pdf:'',
      description:'',
    })
    const select = ['ielts_writing', 'ielts_reading','ielts_listening', 'ielts_speaking']
    const [render, setRender] = useState(false)

    useEffect(() => {
      API.getIeltsData()
      .then(res=> {
        setData(res)
      })
    }, [render])

    console.log(data);
    
    const editBtn =(data, id) => {
      setEdit(id)
      setVedit(data)
    }

    const addHandler =() => {
      console.log('msk ga1');
      console.log(input)
      if(input.subject_id && input.title && input.episode && input.link && input.pdf  && input.description){
        console.log('msk ga2');
        
        API.addlesson(input)
        .then(res => {
          Swal.fire(
            'Berhasil Tambah Video',
            '',
            'success'
          )
          setRender(!render)
        })
      }
    }

    const deleteHandler =(id)=> {
      API.deleteLesson({id})
        .then(res => {
          Swal.fire(
            'Berhasil delete video',
            '',
            'success'
          )
          setRender(!render)
        })
    }

    const editHandler =()=> {
      console.log(vedit);
      if(vedit.subject_id && vedit.title && vedit.episode && vedit.link && vedit.material  && vedit.description){
        API.editlesson(vedit)
          .then(res => {
            Swal.fire(
              'Berhasil edit video',
              '',
              'success'
            )
            setRender(!render)
            setEdit(null)
          })
      }
      
    }


    const renderIelts= ()=>{
      let ieltsdata = data.map(val =>{
        return(
          <tr key={val.id}>
            <td>{val.id}</td>
          {
            val.id==edit?
            <Fragment>
            <td>
              <select onChange={e => {setVedit({...vedit, subject_id: e.target.value})}} value={vedit.subject_id}>
                {select.map(val => {
                  return (
                    <option key={val} value={val}>{val}</option>
                  )
                })}
              </select>
            </td>
            <td><input onChange={e => {setVedit({...vedit, title: e.target.value})}}style={{width: "150px"}} value={vedit.title} type="text"/></td>
            <td><input onChange={e => {setVedit({...vedit, episode: e.target.value})}}style={{width: "150px"}} value={vedit.episode} type="text"/></td>
            <td><input onChange={e => {setVedit({...vedit, link: e.target.value})}}style={{width: "150px"}} value={vedit.link} type="text"/></td>
            <td><input onChange={e => {setVedit({...vedit, material: e.target.value})}}style={{width: "150px"}} value={vedit.material} type="text"/></td>
            <td>
              <button onClick={() => editHandler()} className='btn btn-primary'>Save</button>
              <button onClick={()=> setEdit(null)} className='btn btn-danger'>Cancel</button>
            </td>
            </Fragment>
            :
            <>
            <td>{val.subject_id}</td>
            <td>{val.title}</td>
            <td>{val.episode}</td>
            <td>{val.link}</td>
            <td>{val.material}</td>
            <td>
              <button className='btn btn-primary' onClick={() => editBtn(val,val.id)}>Edit</button>
              <button className='btn btn-danger' onClick={() => deleteHandler(val.id)}>Delete</button>
            </td>
            {/* dibawah ini adalah pengganti fragment */}
            </>
          }        
          </tr>
        )
      })
      return ieltsdata
    }

    if (!data) return <h1>Loading</h1>
    return (
        <Fragment>
        <Dashboard/>
          <div className= "dashboardq">
            <h3 className="text-center py-4">IELTS Dashboard</h3>
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Title</th>
                    <th>Episode</th>
                    <th>Link</th>
                    <th>PDF</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                        <select value={input.subject_id} onChange={e => {setInput({...input, subject_id: e.target.value})}}>
                          <option value="">Select Subject</option>
                          {select.map(val => (
                              <option key={val} value={val}>{val}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <input value={input.title} onChange={e => {setInput({...input, title: e.target.value})}} style={{width: "200px"}} type="text"/>
                      </td>
                      <td>
                        <input value={input.episode} onChange={e => {setInput({...input, episode: e.target.value})}} style={{width: "200px"}} type="text"/>
                      </td>
                      <td>
                        <input value={input.link} onChange={e => {setInput({...input, link: e.target.value})}} style={{width: "200px"}} type="text"/>
                      </td>
                      <td>
                        <input value={input.pdf} onChange={e => {setInput({...input, pdf: e.target.value})}} style={{width: "200px"}} type="text"/>
                      </td>
                    </tr>
                </tbody>
            </table>
              <div style={{display:'grid',width: '300px', marginLeft:'36%', textAlign:'center'}}>
                <label htmlFor="desc">Description</label>
              <textarea value={input.description} onChange={e => setInput({...input, description: e.target.value})} id="desc" cols="30" rows="10"></textarea>
              <button className= 'mt-3' onClick={() => addHandler()}>Add</button>
              </div>
        <table className= 'table text-center mt-3'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Subject</th>
              <th>Title</th>
              <th>Episode</th>
              <th>Link</th>
              <th>PDF</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              renderIelts()
            }
          </tbody>
        </table>
          </div>
          
        </Fragment>
    )
}

export default IeltsDash