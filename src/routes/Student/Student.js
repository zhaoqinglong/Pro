import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'dva';
import {queryStuList,create,removeStuById,queryStus} from './../../services/student'
import {
  List,
  Card,
  Row,
  Col,
  Radio,
  Input,
  Progress,
  Button,
  Icon,
  Dropdown,
  Menu,
  Modal,
  message,
  Avatar,
  Form,
} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from '../List/BasicList.less';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;
const FormItem = Form.Item;

// 表单
const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="添加新的学生信息"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Age">
              {getFieldDecorator('age')(<Input type="textarea" />)}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('gender', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
)


// @connect(({ student, loading })=>({
//   student,
//   loading:loading.models.student,
// }))

function mapPropsToState({ student, loading }){
  return{
    student,
    loading:loading.models.student,
  }
}


export default class StudentList extends Component{
  
  state = {
    visible: false,
  };

  //按条件搜索学生列表
  searchStus=e=>{
    e.preventDefault();
    const params={
      page:1,
      pageSize:10,
      gender:'male',
      keywords:''
    };

    var res=queryStus(params);

    console.log(res);

  }

  showModal = () => {
    this.setState({ visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      create(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  componentDidMount(){
    this.props.dispatch({
      type: 'student/fetch',
      payload: {
        count: 5,
      },
    });
    
    // add().then(res=>{
    //   console.log(res)
    // });
  }



  render(){
 
    const { student: { list }, loading } = this.props;
    console.log(this.props);
    console.log('list',list);

    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue="all">
          <RadioButton value="all">全部</RadioButton>
          <RadioButton value="male">男</RadioButton>
          <RadioButton value="female">女</RadioButton>
        </RadioGroup>
        <Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} />
        <Button type="primary" style={{ marginLeft: 8 }}  onClick={this.searchStus}>
              搜索
        </Button> 
      </div>
    );

    const ListContent = ({ data: { id, name, age,gender } }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          <span>Id</span>
          <p>{id}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>name</span>
          <p>{name}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>age</span>
          <p>{age}</p>
        </div>  
        <div className={styles.listContentItem}>
          <span>gender</span>
          <p>{gender}</p>
        </div> 
      </div>
    );

    const menu = (
      <Menu>
        <Menu.Item>
          <a>编辑</a>
        </Menu.Item>
        <Menu.Item>
          <a>删除</a>
        </Menu.Item>
      </Menu>
    );



    const MoreBtn = () => (
      <Dropdown overlay={menu}>
        <a>
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    );



    return (
      <PageHeaderLayout>
        <div className={styles.standardList}>
          {/* <Card bordered={false}>
            <Row>
              <Col sm={8} xs={24}>
                <Info title="我的待办" value="8个任务" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="本周任务平均处理时间" value="32分钟" bordered />
              </Col>
              <Col sm={8} xs={24}>
                <Info title="本周完成任务数" value="24个任务" />
              </Col>
            </Row>
          </Card> */}

          <Card
            className={styles.listCard}
            bordered={false}
            title="学生列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
            extra={extraContent}
          >
            <Button type="dashed" style={{ width: '100%', marginBottom: 8 }} icon="plus"  onClick={this.showModal}>
              添加
            </Button>           
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
            <List
              size="large"
              rowKey="id"
              loading={loading}
              pagination={false}
              dataSource={list.list}
              renderItem={item => (
                <List.Item actions={[<a>编辑</a>, <MoreBtn />]}>
                  {/* <List.Item.Meta
                    // avatar={<Avatar src={item.logo} shape="square" size="large" />}                
                    name={item.name}
                    age={item.age}                   
                    description={item.subDescription}
                  /> */}
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>       
      </PageHeaderLayout>
    );
  }
}