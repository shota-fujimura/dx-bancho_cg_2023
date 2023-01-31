import Head from "next/head"
import React, { useState } from "react"
import Layout from "../components/layout"
import { motion } from 'framer-motion'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"

function ContactForm() {
    const [serverState, setServerState] = useState({});

    const formSchema = Yup.object().shape({
        name: Yup.string().required("この項目は必ず入力してください。"),
        email: Yup.string()
            .email("有効なメールアドレスを入力しrてください。")
            .required("この項目は必ず入力してください。"),
        message: Yup.string().required("この項目は必ず入力してください。")
    });

    const handleServerResponse = (ok, msg) => {
        setServerState({ ok, msg });
    };

    const handleOnSubmit = async (values, actions) => {
        try {
            await axios({
                method: "POST",
                url: "https://formspree.io/f/mwkjvnay",
                data: values
            })

            actions.setSubmitting(false);
            actions.resetForm();
            handleServerResponse(true, "Thanks!");
        } catch (err) {
            actions.setSubmitting(false);
            handleServerResponse(false, err);
        }
    };


    return (
        <>
            <Head>
                <title>お問い合わせ</title>
            </Head>
            <Layout>
                <div className="container mx-auto h-screen flex flex-col justify-center items-center" >
                    <h1 className="w-full text-center text-xl py-3 font-bold">お問い合わせフォーム</h1>
                    <Formik
                        initialValues={{ name:"", email: "", message: "" }}
                        onSubmit={handleOnSubmit}
                        validationSchema={formSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form
                                className="flex flex-col py-4 w-4/5 md:w-2/5"
                                id="fs-frm"
                            >
                                {/* highlight-start */}
                                {serverState && serverState.ok && (
                                    <p className="text-sm bg-green-100 text-green-700 mb-4 p-2 text-sm"
                                    >
                                        送信完了しました
                                    </p>
                                )}
                                {/* highlight-end */}
                                <label
                                    className="text-sm mb-2"
                                    htmlFor="name"
                                >お名前(会社名)</label>
                                <Field
                                    className="text-sm bg-gray-100 mb-4 p-2 text-sm"
                                    id="name"
                                    type="name"
                                    name="name"
                                />
                                <ErrorMessage
                                    className="mb-4 text-xs text-pink-700 errorMsg"
                                    name="name"
                                    component="div"
                                />
                                <label
                                    className="text-sm mb-2"
                                    htmlFor="email"
                                >メールアドレス</label>
                                <Field
                                    className="text-sm bg-gray-100 mb-4 p-2 text-sm"
                                    id="email"
                                    type="email"
                                    name="email"
                                />
                                <ErrorMessage
                                    className="mb-4 text-xs text-pink-700 errorMsg"
                                    name="email"
                                    component="div"
                                />
                                <label
                                    className="text-sm mb-2"
                                    htmlFor="message"
                                >お問い合わせ内容</label>
                                <Field
                                    className="text-sm bg-gray-100 mb-4 p-2 text-sm"
                                    id="message"
                                    name="message"
                                    component="textarea"
                                />
                                <ErrorMessage className="mb-4 text-xs text-pink-700 errorMsg" name="message" component="div" />
                                <motion.button
                                    className="text-sm text-white bg-blue-600 mt-4 p-2 text-sm"
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{scale:1.1}}
                                    whileTap={{scale:0.9}}
                                >
                                    {isSubmitting ? (<p>送信中...</p>) : (<p>送信</p>)}
                                </motion.button>
                                {serverState && (
                                    <p className={!serverState.ok ? "errorMsg" : ""}>
                                        {serverState?.msg?.message}
                                    </p>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </Layout>
        </>
    )
}

export default ContactForm