{
    db.users.insertMany ([
      {
        "User_id": "1",
        "Name": "Akash",
        "Email": "akash@gmail.com",
        "Phone": "7492732121",
        "role": "Student"
      },
      {
        "User_id": "2",
        "Name": "Barun",
        "Email": "barun@gmail.com",
        "Phone": "8792732121022",
        "role": "Student"
      },
      {
        "User_id": "3",
        "Name": "Mani",
        "Email": "mani@gmail.com",
        "Phone": "987632121",
        "role": "Student"
      }
    ])
  
    de.codekata.insertMany([
      {
          "User_id":"1",
          "Date":"2020-10-10",
          "Problems_solved":"5"
      },
      {
          "User_id":"1",
          "Date":"2020-10-15",
          "Problems_solved":"15"
      },
      {
          "User_id":"2",
          "Date":"2020-10-11",
          "Problems_solved":"6"
      },
      {
          "User_id":"2",
          "Date":"2020-10-18",
          "Problems_solved":"9"
      },
      {
          "User_id":"3",
          "Date":"2020-10-15",
          "Problems_solved":"9"
      }
    ])
    db.attendace.insertMany([
      {
        "User_id":"1",
        "Date":"2020-10-10",
        "Status":"Present"
      },
      {
        "User_id":"2",
        "Date":"2020-10-10",
        "Status":"Present"
      },
      {
        "User_id":"3",
        "Date":"2020-10-10",
        "Status":"Present"
      },
      {
        "User_id":"1",
        "Date":"2020-10-15",
        "Status":"Absent"
      },
      {
        "User_id":"2",
        "Date":"2020-10-15",
        "Status":"Present"
      },
      {
        "User_id":"3",
        "Date":"2020-10-15",
        "Status":"Present"
      },
      {
        "User_id":"1",
        "Date":"2020-10-18",
        "Status":"Present"
      },
      {
        "User_id":"2",
        "Date":"2020-10-18",
        "Status":"Present"
      },
      {
        "User_id":"3",
        "Date":"2020-10-18",
        "Status":"Absent"
      }
      
    ])
  
    db.topics.insertMany([
      {
        "topic_id":"1",
        "Date":"2020-10-10",
        "topic_name":"HTML"
      },
      {
        "topic_id":"2",
        "Date":"2020-10-15",
        "topic_name":"CSS"
      },
      {
        "topic_id":"3",
        "Date":"2020-10-18",
        "topic_name":"Javascript"
      }
    ])
    db.tasks.insertMany([
      {
        "task_id":"1",
        "topic_id":"1",
        "User_id":"1",
        "Date":"2020-10-10",
        "task_name":"Semantic HTML",
        "submitted":"true"
      },
      
      {
        "task_id":"1",
        "topic_id":"1",
        "User_id":"2",
        "Date":"2020-10-10",
        "task_name":"Semantic HTML",
        "submitted":"true"
      },
      {
        "task_id":"1",
        "topic_id":"1",
        "User_id":"3",
        "Date":"2020-10-10",
        "task_name":"Semantic HTML",
        "submitted":"true"
      },
      {
        "task_id":"2",
        "topic_id":"2",
        "User_id":"1",
        "Date":"2020-10-15",
        "task_name":"Flexbox in CSS",
        "submitted":"false"
      },
      {
        "task_id":"2",
        "topic_id":"2",
        "User_id":"2",
        "Date":"2020-10-15",
        "task_name":"Flexbox in CSS",
        "submitted":"true"
      },
      {
        "task_id":"2",
        "topic_id":"2",
        "User_id":"3",
        "Date":"2020-10-15",
        "task_name":"Flexbox in CSS",
        "submitted":"true"
      },
      {
        "task_id":"3",
        "topic_id":"3",
        "User_id":"1",
        "Date":"2020-10-18",
        "task_name":"Datatypes",
        "submitted":"true"
      },
      {
        "task_id":"3",
        "topic_id":"3",
        "User_id":"2",
        "Date":"2020-10-18",
        "task_name":"Datatypes",
        "submitted":"true"
      },
      {
        "task_id":"3",
        "topic_id":"3",
        "User_id":"3",
        "Date":"2020-10-18",
        "task_name":"Datatypes",
        "submitted":"false"
      }
    ])
    db.company_drives.insertMany([
      {
        "drive_id":"1",
        "User_id":"1",
        "Date":"2020-10-14",
        "drive_name":"HCL"
      },
      {
        "drive_id":"1",
        "User_id":"2",
        "Date":"2020-10-14",
        "drive_name":"HCL"
      },
      {
        "drive_id":"1",
        "User_id":"2",
        "Date":"2020-10-14",
        "drive_name":"HCL"
      },
      {
        "drive_id":"2",
        "User_id":"1",
        "Date":"2020-10-18",
        "drive_name":"Zoho"
      },
      {
        "drive_id":"3",
        "User_id":"2",
        "Date":"2020-10-24",
        "drive_name":"TCS"
      }
  
    ])
    db.mentors.insertMany([
      {
        "mentor_id":"1",
        "mentor_name":"Sathish",
        "mentee_count":17
      },
      {
        "mentor_id":"2",
        "mentor_name":"Abarna",
        "mentee_count":13
      },
      {
        "mentor_id":"3",
        "mentor_name":"Irfan",
        "mentee_count":16
      },
      {
        "mentor_id":"4",
        "mentor_name":"John",
        "mentee_count":17
      }
    ])
  }