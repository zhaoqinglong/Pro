import Mmbs from 'Mmbs';
// import request from '../utils/request';
// import util from '../utils/mmbsSer';

const Student = Mmbs.Object.extend("Student");

export async function queryStuList() {
   
  const query=new Mmbs.Query(Student);

  const total = await query.count()
  const list = await query.find()
  const res= {
    total,
    list: list.map(m => ({...m, ...m.attributes})),
  }
  console.log(res);
  return res;

  
//   const stuList=[];
//   query.find({
//     success(res){
     
//       for(let i=0;i<res.length;i++){
       
//         stuList.push({
//           id:res[i].id,
//           name:res[i].attributes.name,
//           age:res[i].attributes.age,
//         });
//       }
     
//     },
//     error(error) {
//       // error is an instance of mmbs.error.
//       console.log(error);
//     },
    
//   });
//  console.log(stuList);
//    return stuList;
  // return request('/api/students');
}

export async function queryStus(params){
 const {page, pageSize, gender,keywords}=params;
 const query=new Mmbs.Query(Student);
 if(keywords && keywords.length){
  query.contains('name',keywords);
 }

 if(gender && gender.length){
   query.equalTo('gender',gender);
 }
 const total = await query.count();
if(total>pageSize){
  query.skip((page-1)*pageSize);
  query.limit(pageSize)
}

  const list = await query.find();
  const res= {
    total,
    list: list.map(m => ({...m, ...m.attributes})),
  }
  console.log('query',res);
  return res;
}

export async function create(params) {
  const {name,age,gender}=params;
  const stu=new Student();
  stu.set('name',name);
  stu.set('age',age*1);
  stu.set('gender',gender);
  return stu.save();
  // return util.createStudent();
  // const stu = new Student();
  // stu.set("name", '张山');
  // stu.set("age",15);
  // stu.save(null, {
  //   success(object) {
  //     console.log(`create object success, object id:${object.id}`);
  //   },
  //   error(model, error) {
  //     console.log("create object fail", error);
  //   },
  // })
}

export async function removeStuById(params) {
  const query=new Mmbs.Query(Student);

  const {id}=params;
  // const removed=new Student();
  
  // removed.id=id;
  // removed.set('deleted',true);

  // return removed.save();
  query.get(id, {
    success(object) {
      // The object was retrieved successfully.
      object.destroy({
        success(deleteObject) {
          console.info("delete success",deleteObject);
        },
        error(deleteObjectTest, error) {
          console.error("delete fail",error);
        },
      });
    },
    error(object, error) {
      console.error("query object fail",error);
    },
  });
}

export async function modifyStudent(params) {
  const{id,name,age,gender}=params;
  const query=new Mmbs.Query(Student);
query.get(id,{
  success(stu){
    stu.set('name',name);
    stu.set('age',age*1);
    stu.set('gender',gender);
    stu.save();
  },
  error(object, error) {
    console('modify error',error);
  },
})

}

