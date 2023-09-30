import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'
import reports from '../images/report.png'

const Report = () => {
    const [report, setReport] = useState('')
    const [pincodeOfIncident, setpincodeOfIncident] = useState('')
    const [address, setAddress] = useState('')
    const [mimeType, setmimeType] = useState('')
    const [note, setext] = useState(null)
    const [auth, setAuth] = useAuth()
    const [user, setuser] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!report.trim()) {
            toast.error('Report is Required !')
            return false
        }
        if (!pincodeOfIncident.trim()) {
            toast.error('PinCode is Required !')
            return false
        }
        if (!address.trim()) {
            toast.error('Address is Required !')
            return false
        }
        try {
            setuser(auth.user._id)
            setext(note.split('.')[1])

            const reportData = new FormData()
            reportData.append('user', user)
            reportData.append('report', report)
            reportData.append('address', address)
            reportData.append('pincodeOfIncident', pincodeOfIncident)
            reportData.append('mimeType', mimeType)

            const res = await axios.post('https://womensecbackend.onrender.com/api/v1/incidents', {
                content: reportData,
                media: note
            }, {
                headers: {
                    "content-type": "multipart/form-data",

                }
            })

            if (res.status == 201) {
                toast.success('Report Sended Successfully')
            }
        } catch (err) {
            toast.error('Error in Sending Report')
        }
    }
    return (
        <div className='marginStyle '>
            <div class="container d-flex justify-content-center align-items-center">
                <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                    <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                        <div class="featured-image mb-3 animateImg">
                            <img src={reports} class="img-fluid" />
                        </div>
                    </div>
                    <form method='post' enctype="multipart/form-data" class="col-md-6 right-box">
                        <div class="row align-items-center">
                            <div class="header-text mb-4">
                                <h2>Incident report</h2>
                                <p>We us your Incident, we will take action against it !</p>
                            </div>
                            <div class="input-group d-flex  align-items-center mb-3">
                                <div class="form-outline flex-fill mb-0">
                                </div>
                            </div>
                            <div class="input-group d-flex flex-row align-items-center mb-3">
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <textarea type="text" value={report} onChange={(e) => setReport(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Write the Report of the Incident" required />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="number" value={pincodeOfIncident} onChange={(e) => setpincodeOfIncident(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter the pin of the Incident Pin" required />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter the Address of the Incident" required />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="file" value={note} onChange={(e) => setext(e.target.value)} class="form-control form-control-lg border-dark fs-6" placeholder="Enter the pin of the Incident Place" required />
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center my-3 ">
                                <div class="form-outline flex-fill mb-0 " >
                                    <button className='btn text-white btn-lg btn-block' onClick={handleSubmit} style={{ width: '100%', backgroundColor: 'blueviolet' }} type="submit">Submit Incident</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Report
