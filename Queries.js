// 1. Find all the topics and tasks which are thought in the month of October

db.createView( "octoberSession", "topics", [
    {
       $lookup:
          {
             from: "tasks",
             localField: "topic_id",
             foreignField: "topic_id",
             as: "tasksDocs"
          }
    },
    {
       $project:
          {
            _id: 0,
  topic_id:1,
  task_id:"$tasksDocs.task_id",
  Date:1,
  topic_name:1,
  task_name:"$tasksDocs.task_name"
    }
    },
  { $unwind: "$task_id" },
      { $unwind: "$task_name" }
  ] )
  
  
  db.octoberSession.aggregate([{$match:{$expr:{$eq:[{$month:{$dateFromString:{dateString:"$Date", format:"%Y-%m-%d"}}},10]}}}])

//   2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({Date:{$gte:"2020-10-15",$lte:"2020-10-31"}})

// 3.Find all the company drives and students who are appeared for the placement

db.createView( "placement1", "company_drives", [
    {
       $lookup:
          {
             from: "users",
             localField: "User_id",
             foreignField: "User_id",
             as: "userDocs"
          }
    },
    {
       $project:
          {
            _id: 0,
            User_id: 1,
            User_name:"$userDocs.Name",
            drive_id: 1,
            Date: 1,
            drive_name:1,
            
          }
    },
       { $unwind:"$User_name" }
  ] )
  
  db.placement1.find()


//   4.Find the number of problems solved by the user in codekata

db.codekata.aggregate( [
    {
       $group:
          {
             _id: "$User_id",
             totalProblemsSolved: { $sum:  {$toInt:"$Problems_solved" }} 
          }
    }
  ] )

//   5.Find all the mentors with who has the mentee's count more than 15

db.mentors.find({ mentee_count: { $gt: 15 } }).pretty()


// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([
    {
        $match:{
            Date:{
                $gte:"2020-10-15", $lte:"2020-10-31"
    },
            Status:"Absent"
            }
    },
    {
        $lookup:{
            from :"tasks",
            localField:"User_id",
            foreignField:"User_id",
            as:"tasksDocs"
            }
    },
    {
        $match:{
            "tasksDocs.submitted":"false"
            }
    },
    {
        $group:{
            _id:null,
            count:{$sum:1}
            }
    }
    ])
