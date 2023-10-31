import React from "react";
import {
    Typography,
    Layout,
    Row,
    Col,
    Affix,
    Image,
    Button,
    Tooltip,
    Popover,
} from 'antd'

import {
    DownloadOutlined,
} from '@ant-design/icons'

import {
    useContext,
} from 'react'

import { Context } from './store/Context'

// props: image
function FloatImageCol(props) {
    return (
        <Col span={12}>
            <Row justify='center'>
            <div>
                <Image height={400} preview={false} src={props.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></Image>
            </div>
            </Row>
        </Col>
    )
}

// props title, text
function FloatTextCol(props) {
    return (
        <Col span={12}>
            <div>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography.Title>
                        {props.title}
                    </Typography.Title>
                </Row>
                <Row justify='center' style={{'padding': '0px 50px'}}>
                    <Typography style={{'fontSize': '16px'}}>
                        {props.text}
                    </Typography>
                </Row>
            </div>
        </Col>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheLeft(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px', 'textAlign':'left'}}>
                <FloatImageCol image={props.sectionItem.image} />
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
            </Row>
        </Row>
    )
}

// props: sectionItem, backgroundColor
function SectionItemImageOnTheRight(props) {
    return (
        <Row justify='center' align='middle' style={{'backgroundColor': props.backgroundColor, 'height': '700px', 'padding': '100px'}}>
            <Row justify='center' align='middle' style={{'maxWidth': '2000px', 'textAlign':'right'}}>
                <FloatTextCol title={props.sectionItem.title} text={props.sectionItem.text} />
                <FloatImageCol image={props.sectionItem.image} />
            </Row>
        </Row>
    )
}

// props: sectionList
function SectionList(props) {
    return (
        <>
        {
            props.sectionList.map((sectionItem, index) => {
                return (
                    index % 2 === 0?
                        <SectionItemImageOnTheLeft sectionItem={sectionItem} backgroundColor={'white'} key={index}/>
                        :
                        <SectionItemImageOnTheRight sectionItem={sectionItem} backgroundColor={null} key={index}/>
                )

            })
        }
        </>
    )
}

function Desktop() {
    const {state, dispatch} = useContext(Context)

    return (
        <Layout style={{'minWidth': '1000px'}}>
            <Affix offsetTop={0}>
                <Layout.Header style={{'background': '#fff', 'height': '70px'}}>
                    <Row justify='center' align='top' style={{'backgroundColor': '#fff', 'height': '100%'}}>
                        <Row justify='start' align='top' style={{'maxWidth': '2000px', 'width': '100%', 'height': '100%', 'backgroundColor': '#fff'}}>
                            <Col offset={1} style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                                <Row justify='center' align='bottom'>
                                    <Col>
                                        <Image height={40} preview={false} src={state.appLogo}></Image>
                                    </Col>
                                    <Col>
                                        <Typography.Title level={3} style={{'color': 'black', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Layout.Header>
            </Affix>

            <Layout.Content>
                {/* cover headline */}
                <Row justify='center' align='middle' style={{'backgroundColor': '#fff', 'height': '700px'}}>
                <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>
                    <Col style={{'width': '40%'}}>
                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography.Title>
                                {state.coverTitle}
                            </Typography.Title>
                        </Row>

                        <Row justify='center' style={{'padding': '0px 50px'}}>
                            <Typography style={{'fontSize': '16px', 'color':'', 'textAlign':'center'}}>
                                {state.coverText}
                            </Typography>
                        </Row>

                        <Row justify='center' style={{'marginTop': '50px'}}>
                            {
                                state.appleStoreLink &&
                                <Col style={{'width': '200px'}}>
                                    <Row justify='center'>
                                    <a href={state.appleStoreLink} target='_blank' rel="noopener noreferrer">
                                        <Image height={50} preview={false} src={state.appleStoreBadge}></Image>
                                    </a>
                                    </Row>
                                </Col>
                            }
                            {
                                state.googlePlayLink &&
                                <Col style={{'width': '150px'}}>
                                    <Row justify='center'>
                                    <a href={state.googlePlayLink} target='_blank' rel="noopener noreferrer">
                                        <Image height={50} preview={false} src={state.googlePlayBadge}></Image>
                                    </a>
                                    </Row>
                                </Col>
                            }
                        </Row>
                    </Col>

                    <Col style={{'width': '60%'}}>
                        <Row justify='center'>
                        <Image width={800} height={700} preview={false} src={state.coverImage}></Image>
                        </Row>
                    </Col>
                </Row>
                </Row>


                {/* endorsement list */}
                <Row justify='center' align='middle' style={{'height': '700px', 'padding': '100px'}}>
                <Row justify='center' align='middle' style={{'maxWidth': '2000px'}}>

                    <div>
                        <Row justify='center'>
                            <Typography.Title>
                                {state.endorsementTitle}
                            </Typography.Title>
                        </Row>
                        <Row justify='center'>
                            <Typography style={{'fontSize': '16px'}}>
                                {state.endorsementText}
                            </Typography>
                        </Row>

                        <Row justify='center' style={{'marginTop': '50px'}}>
                            {
                                state.endorsementList.map((endorsementItem, index) => {
                                    return (
                                        <Col span={3} key={index}>
                                            <Tooltip placement='top' title={endorsementItem.title} color={endorsementItem.titleColor}>
                                            <a href={endorsementItem.URL} target='_blank' rel="noopener noreferrer">
                                                <Image height={70} preview={false} src={endorsementItem.image} style={{'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></Image>
                                            </a>
                                            </Tooltip>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                </Row>
                </Row>

                {/* section list */}
                <SectionList sectionList={state.sectionList} />


                {/* policies */}
                <Row justify='center' align='middle' style={{'backgroundColor': 'white', 'height': '400px', 'padding': '100px'}}>
                <Row justify='left' align='top' style={{'maxWidth': '2000px', 'width': '100%'}}>
                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'cursor': 'pointer'}} onClick={() => { window.scrollTo(0, 0)}}>
                            <Col>
                                <Image height={40} preview={false} src={state.appLogo} style={{'filter': "grayscale(1)", 'opacity': '0.7'}}></Image>
                            </Col>
                            <Col>
                                <Typography.Title level={3} style={{'color': 'gray', 'marginLeft': '10px'}}>{state.appName}</Typography.Title>
                            </Col>
                        </Row>
                        <Row justify='start' align='middle' style={{'marginTop': '125px'}}>
                            <Col>
                                <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large' danger onClick={() => { window.scrollTo(0, 0)}}>Download</Button>
                            </Col>

                        </Row>
                    </Col>

                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'margin': '20px 0'}}>
                            <Typography>
                                Who we are
                            </Typography>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/cookies'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                Cookies Policy
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/privacy'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title  level={5}>
                                Privacy Policy
                            </Typography.Title>
                        </a>
                        </Row>
                        <Row justify='start' align='middle'>
                        <a href={state.appURL + '/policy/terms'} target='_blank' rel="noopener noreferrer">
                            <Typography.Title level={5}>
                                Terms of Service
                            </Typography.Title>
                        </a>
                        </Row>
                    </Col>

                    <Col style={{'padding': '0px 20px'}}>
                        <Row justify='start' align='middle' style={{'margin': '20px 0'}}>
                            <Typography>
                                Need help?
                            </Typography>
                        </Row>
                        <Row justify='start' align='middle' style={{'cursor': 'pointer'}}>
                            <Popover placement='top' title='Contact Us' content={

                                <a href={state.discordLink} target='_blank' rel="noopener noreferrer">
                                    <Row justify='start' align='middle'>
                                        <Col>
                                            <Image height={40} preview={false} src={state.discordImage}></Image>
                                        </Col>
                                        <Col style={{'marginLeft': '5px'}}>
                                            <Typography>Join our Discord</Typography>
                                        </Col>
                                    </Row>

                                </a>
                            } trigger='click'>
                                <Typography.Title level={5}>
                                    Contact Us
                                </Typography.Title>
                            </Popover>
                        </Row>
                    </Col>
                </Row>
                </Row>

                <Row justify="center" align='middle' style={{'backgroundColor': 'white', 'padding': '0 0 40px 0'}}>
                    <Col>
                        <Typography.Text type="secondary" style={{'fontSize': 12}}>
                            {state.appName} © {new Date().getFullYear()}
                        </Typography.Text>
                    </Col>
                </Row>

            </Layout.Content>

        </Layout>
    )
}

export default Desktop
