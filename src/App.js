import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'

export default class App extends Component {
  state = {
    title : "RIZAL",
    users: [
      {
        id:1,
        nim: "19090093",
        nama: "Mohamad Rizal Khamami",
        umur: 19,
        alamat: "Brebes"
      },
      {
        id:2,
        nim: "19090094",
        nama: "Khafidul Mualif",
        umur: 20,
        alamat: "Tegal"
      },
      {
        id:3,
        nim: "19090095",
        nama: "Muhammad Fikri",
        umur: 20,
        alamat: "Tegal"
      },
      {
        id:4,
        nim: "19090096",
        nama: "Muhammad Shuro Fadhillah",
        umur: 19,
        alamat: "Tegal"
      },
      {
        id:5,
        nim: "19090097",
        nama: "Efendi Kisnoto",
        umur: 19,
        alamat: "Tegal"
      },
      {
        id:6,
        nim: "19090098",
        nama: "Insan Maulana",
        umur: 19,
        alamat: "Pemalang"
      },
      {
        id:7,
        nim: "19090099",
        nama: "Ahmad Tantowi",
        umur: 22,
        alamat: "Brebes"
      },
      {
        id:8,
        nim: "19090100",
        nama: "Hisyam Maulana",
        umur: 23,
        alamat: "Brebes"
      },
      {
        id:9,
        nim: "19090101",
        nama: "Dhiyo Reksa",
        umur: 20,
        alamat: "Pemalang"
      },
      {
        id:10,
        nim: "19090102",
        nama: "Felix Yulianto",
        umur: 22,
        alamat: "Semarang"
      },
      {
        id:11,
        nim: "19090103",
        nama: "Yayang Setiawan",
        umur: 20,
        alamat: "Solo"
      },
      {
        id:12,
        nim: "19090104",
        nama: "Faqih Akih",
        umur: 20,
        alamat: "Tegal"
      },
      {
        id:13,
        nim: "19090105",
        nama: "Adi Sangjaya",
        umur: 19,
        alamat: "Batam"
      },
      {
        id:14,
        nim: "19090106",
        nama: "Doni Cahya",
        umur: 21,
        alamat: "Tegal"
      },
      {
        id:15,
        nim: "19090107",
        nama: "Nurul Chotimah",
        umur: 21,
        alamat: "Tegal"
      }
    ]
  }
  render() {
    return (
      <div>
       <NavbarComponent judul={this.state.title}/>
       <TableComponent users={this.state.users}/>
      </div>
    )
  }
}
