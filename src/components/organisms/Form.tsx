import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { css, keyframes } from '@emotion/react'
import {
  Box,
  Button,
  FormControlLabel,
  Input,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
  TextField,
} from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useStateMachine, GlobalState } from 'little-state-machine'
import { usePostalJp } from 'use-postal-jp'

import { SectionTitle } from '~/components/atoms/SectionTitle'
import updateAction from '~/utils/updateActions'
import { IsProd, isClosed } from '~/constants/environment'

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { actions } = useStateMachine({ updateAction })

  const schema = yup.object().shape({
    area: yup
      .string()
      .required('必須項目に入力してください')
      .test('test_ar', '選択されていません', value =>
        value === '未選択' ? false : true
      ),
    kyositsu: yup
      .string()
      .required('必須項目に入力してください')
      .test('test_ky', '選択されていません', value =>
        value === '未選択' ? false : true
      )
      .test('test_ar', '選択されていません', value =>
        value === 'エリア' ? false : true
      ),
    sei: yup.string().required('必須項目に入力してください'),
    mei: yup.string().required('必須項目に入力してください'),
    seikana: yup.string().required('必須項目に入力してください'),
    meikana: yup.string().required('必須項目に入力してください'),
    sex: yup.string().required('いずれかを選択してください'),
    birth_year: yup
      .mixed()
      .test('test_by', '選択されていません', value =>
        value === '未選択' ? false : true
      ),
    birth_month: yup
      .mixed()
      .test('test_bm', '選択されていません', value =>
        value === '未選択' ? false : true
      ),
    birth_date: yup
      .mixed()
      .test('test_bd', '選択されていません', value =>
        value === '未選択' ? false : true
      ),
    grade: yup
      .string()
      .required('必須項目に入力してください')
      .test('test_gr', '選択されていません', value =>
        value === '未選択' ? false : true
      ),
    postal_code: yup.string().required('必須項目に入力してください').max(7),
    region: yup.string().required('必須項目に入力してください'),
    locality: yup.string().required('必須項目に入力してください'),
    street_address: yup.string().required('必須項目に入力してください'),
    email: yup
      .string()
      .required('必須項目に入力してください')
      .email('正しい形式のメールアドレスを入力してください'),
    phone: yup.string().required('必須項目に入力してください'),
    school: yup.string().required('必須項目に入力してください'),
    comment: yup.string().max(500),
  })

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm<GlobalState>({
    defaultValues: {
      channel: 'WEB申込',
      area: '未選択',
      kyositsu: '未選択',
      sei: '',
      mei: '',
      seikana: '',
      meikana: '',
      sex: '未選択',
      date: '',
      birth_year: '未選択',
      birth_month: '未選択',
      birth_date: '未選択',
      grade: '未選択',
      postal_code: '',
      region: '未選択',
      locality: '',
      street_address: '',
      extended_address: '',
      email: '',
      phone: '',
      school: '',
    },
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
  })

  const { area, postal_code, birth_year, birth_month, birth_date } = watch()

  const [address, loading, error] = usePostalJp(
    postal_code,
    postal_code.length >= 7
  )

  const uru = parseInt(birth_year) % 4 === 0
  const long = ['1', '3', '5', '7', '8', '10', '12']

  useEffect(() => {
    if (window.localStorage.getItem('data')) {
      const raw = window.localStorage.getItem('data')
      const obj = JSON.parse(raw, (key, value) => {
        if (key === undefined) {
          return 'empty'
        } else {
          return value
        }
      })

      if (obj.area !== undefined) {
        setValue('area', obj.area, { shouldValidate: false })
        setValue('kyositsu', obj.kyositsu, {
          shouldValidate: false,
        })
      }
    }

    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  useEffect(() => {
    if (window.localStorage.getItem('data')) {
      const raw = window.localStorage.getItem('data')
      const obj = JSON.parse(raw, (key, value) => {
        if (key === undefined) {
          return 'empty'
        } else {
          return value
        }
      })
      if (getValues('area') !== obj?.area) {
        setValue('kyositsu', '未選択', { shouldValidate: false })
      }
    } else {
      setValue('kyositsu', '未選択', { shouldValidate: false })
    }
  }, [area])

  useEffect(() => {
    const year = getValues('birth_year')
    const month = getValues('birth_month')
    const day = getValues('birth_date')
    setValue('date', `${year}/${month}/${day}`, { shouldValidate: false })
  }, [birth_year, birth_month, birth_date])

  useEffect(() => {
    if (address?.address2 !== undefined) {
      setValue('region', address?.prefecture, { shouldValidate: true })
      setValue('locality', address?.address1, { shouldValidate: true })
      setValue('street_address', address?.address2, { shouldValidate: true })
    }
  }, [address])

  const onSubmit = async (data: GlobalState) => {
    try {
      const res = await fetch(
        'https://t-msg.co.jp/lp/kyotsutest-joho2311/send_mail.php',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      ).then(() => console.log('form sent!'))

      actions.updateAction(data)

      if (formRef.current) {
        formRef.current.submit()
      }
    } catch {
      err =>
        console.error(
          'There has been an error.  Here some thoughts on the error that occured:',
          err
        )
    }
  }

  return (
    <>
      <section css={styles.wrapper} id='form'>
        <Box css={styles.head} className='title_fm'>
          <SectionTitle title='お申し込みフォーム' subtitle='ENTRY' />
        </Box>
        <Box className='subtitle_fm'>
          <Typography variant='body1' css={styles.subtitle}>
            共通テスト「情報Ⅰ」体験模試
            <br />
            のお申し込みフォームです
            <br />
            必要事項をご入力の上
            <br />
            送信ボタンを押してください
          </Typography>
        </Box>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          action='https://em.t-msg.co.jp/l/1013242/2023-06-08/6ybq'
          method='POST'
          name='contact'>
          <div css={styles.form_wrapper}>
            <div css={styles.required}>
              <span>※</span> - 必須項目
            </div>
            <div css={styles.uncontrolled}>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('channel')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('kyositsu')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('sei')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('mei')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('seikana')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('meikana')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('date')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('grade')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('sex')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('postal_code')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('region')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('locality')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('street_address')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <Input {...register('extended_address')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <Input {...register('phone')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <input {...register('email')} />
                </dd>
              </dl>
              <dl>
                <dt>
                  <label>テスト</label>
                </dt>
                <dd>
                  <Input {...register('school')} />
                </dd>
              </dl>
            </div>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>希望エリア</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='area'
                  render={({ field }) => (
                    <Select
                      variant='outlined'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth>
                      <MenuItem value='未選択'>選択してください</MenuItem>
                      <MenuItem value='神奈川'>神奈川県</MenuItem>
                      <MenuItem value='愛知'>愛知県</MenuItem>
                      <MenuItem value='埼玉'>埼玉県</MenuItem>
                      <MenuItem value='岐阜'>岐阜県</MenuItem>
                    </Select>
                  )}
                />
                {errors.area && errors.area.type === 'test_ar' && (
                  <span role='alert' css={styles.error}>
                    {errors.area.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>
                  受験希望校舎
                  <br />
                  <span css={styles.bumonlink}>
                    （校舎について詳しくは
                    <Link
                      href='https://t-msg.co.jp/?s='
                      passHref
                      target='_blank'
                      css={styles.bumon}>
                      校舎一覧
                    </Link>
                    をご覧ください）
                  </span>
                </label>
              </dt>
              <dd css={styles.form_input}>
                {area === '神奈川' ? (
                  <Controller
                    control={control}
                    name='kyositsu'
                    render={({ field }) => (
                      <Select
                        variant='outlined'
                        value={field.value}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        fullWidth>
                        <MenuItem value='未選択'>選択してください</MenuItem>
                        <MenuItem value='エリア'>====横浜市====</MenuItem>
                        <MenuItem value='市ヶ尾校'>い 市ヶ尾校</MenuItem>
                        <MenuItem value='金沢八景駅前校'>
                          か 金沢八景駅前校
                        </MenuItem>
                        <MenuItem value='金沢文庫校'>か 金沢文庫校</MenuItem>
                        <MenuItem value='上大岡校'>か 上大岡校</MenuItem>
                        <MenuItem value='鴨居校'>か 鴨居校</MenuItem>
                        <MenuItem value='菊名校'>き 菊名校</MenuItem>
                        <MenuItem value='北山田駅前校'>
                          き 北山田駅前校
                        </MenuItem>
                        <MenuItem value='希望が丘校'>き 希望が丘校</MenuItem>
                        <MenuItem value='港南台214ビル校'>
                          こ 港南台214ビル校
                        </MenuItem>
                        <MenuItem value='新横浜駅前校'>
                          し 新横浜駅前校
                        </MenuItem>
                        <MenuItem value='杉田校'>す 杉田校</MenuItem>
                        <MenuItem value='センター北校'>
                          せ センター北校
                        </MenuItem>
                        <MenuItem value='センター南校'>
                          せ センター南校
                        </MenuItem>
                        <MenuItem value='戸塚駅西口校'>
                          と 戸塚駅西口校
                        </MenuItem>
                        <MenuItem value='戸塚駅東口校'>
                          と 戸塚駅東口校
                        </MenuItem>
                        <MenuItem value='中山校'>な 中山校</MenuItem>
                        <MenuItem value='根岸校'>ね 根岸校</MenuItem>
                        <MenuItem value='能見台校'>の 能見台校</MenuItem>
                        <MenuItem value='東戸塚校'>ひ 東戸塚校</MenuItem>
                        <MenuItem value='二俣川駅南口校'>
                          ふ 二俣川駅南口校
                        </MenuItem>
                        <MenuItem value='三ツ境校'>み 三ツ境校</MenuItem>
                        {/* <MenuItem value='横浜駅きた東口校'>
                          よ 横浜駅きた東口校
                        </MenuItem> */}
                        <MenuItem value='横浜駅西口校'>
                          よ 横浜駅西口校・横浜駅きた東口校
                        </MenuItem>
                        <MenuItem value='エリア'>====川崎市====</MenuItem>
                        <MenuItem value='溝の口北校'>み 溝の口北校</MenuItem>
                        <MenuItem value='元住吉校'>も 元住吉校</MenuItem>
                        <MenuItem value='エリア'>====鎌倉市====</MenuItem>
                        <MenuItem value='大船校'>お 大船校</MenuItem>
                        <MenuItem value='大船東校'>お 大船東校</MenuItem>
                        <MenuItem value='鎌倉小町通り校'>
                          か 鎌倉小町通り校
                        </MenuItem>
                        <MenuItem value='エリア'>====藤沢市====</MenuItem>
                        <MenuItem value='辻堂校'>つ 辻堂校</MenuItem>
                        <MenuItem value='エリア'>====茅ヶ崎市====</MenuItem>
                        <MenuItem value='茅ヶ崎校'>ち 茅ヶ崎校</MenuItem>
                        <MenuItem value='エリア'>====大和市====</MenuItem>
                        <MenuItem value='大和駅南口校'>
                          や 大和駅南口校
                        </MenuItem>
                        <MenuItem value='エリア'>====横須賀市====</MenuItem>
                        <MenuItem value='追浜校'>お 追浜校</MenuItem>
                        {/* <MenuItem value='北久里浜校'>き 北久里浜校</MenuItem> */}
                        <MenuItem value='衣笠校'>き 衣笠校</MenuItem>
                        <MenuItem value='久里浜駅前校'>
                          く 久里浜駅前校
                        </MenuItem>
                        <MenuItem value='横須賀中央校'>
                          よ 横須賀中央校
                        </MenuItem>
                      </Select>
                    )}
                  />
                ) : null}
                {area === '愛知' ? (
                  <Controller
                    control={control}
                    name='kyositsu'
                    render={({ field }) => (
                      <Select
                        variant='outlined'
                        value={field.value}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        fullWidth>
                        <MenuItem value='未選択'>選択してください</MenuItem>
                        <MenuItem value='エリア'>
                          ====名古屋・西尾張====
                        </MenuItem>
                        <MenuItem value='犬山駅前校'>い 犬山駅前校</MenuItem>
                        <MenuItem value='大曽根校'>お 大曽根校</MenuItem>
                        <MenuItem value='上社校'>か 上社校</MenuItem>
                        <MenuItem value='黒川駅前校'>く 黒川駅前校</MenuItem>
                        <MenuItem value='高蔵寺校'>こ 高蔵寺校</MenuItem>
                        <MenuItem value='千種校'>ち 千種校</MenuItem>
                        <MenuItem value='茶屋が坂校'>ち 茶屋が坂校</MenuItem>
                        <MenuItem value='名古屋駅太閤口校'>
                          な 名古屋駅太閤口校
                        </MenuItem>
                        <MenuItem value='星ヶ丘駅東口校'>
                          ほ 星ヶ丘駅東口校
                        </MenuItem>
                        <MenuItem value='エリア'>
                          ====東尾張・西三河====
                        </MenuItem>
                        <MenuItem value='愛知日進駅前校'>
                          あ 愛知日進駅前校
                        </MenuItem>
                        <MenuItem value='旭前校'>あ 旭前校</MenuItem>
                        <MenuItem value='安城駅前校'>あ 安城駅前校</MenuItem>
                        <MenuItem value='杁ヶ池公園駅前校'>
                          い 杁ヶ池公園駅前校
                        </MenuItem>
                        <MenuItem value='太田川校'>お 太田川校</MenuItem>
                        <MenuItem value='刈谷駅南口校'>
                          か 刈谷駅南口校
                        </MenuItem>
                        <MenuItem value='原校'>は 原校</MenuItem>
                        <MenuItem value='半田青山駅前校'>
                          は 半田青山駅前校
                        </MenuItem>
                      </Select>
                    )}
                  />
                ) : null}
                {area === '埼玉' ? (
                  <Controller
                    control={control}
                    name='kyositsu'
                    render={({ field }) => (
                      <Select
                        variant='outlined'
                        value={field.value}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        fullWidth>
                        <MenuItem value='未選択'>選択してください</MenuItem>
                        <MenuItem value='越谷駅東口校'>
                          こ 越谷駅東口校
                        </MenuItem>
                        <MenuItem value='越谷レイクタウン駅前校'>
                          こ 越谷レイクタウン駅前校
                        </MenuItem>
                        {/* <MenuItem value='新所沢駅前校'>
                          し 新所沢駅前校
                        </MenuItem>
                        <MenuItem value='獨協大学前校'>
                          ど 獨協大学前校
                        </MenuItem>
                        <MenuItem value='西所沢駅前校'>
                          に 西所沢駅前校
                        </MenuItem> */}
                        <MenuItem value='ふじみ野駅前校'>
                          ふ ふじみ野駅前校
                        </MenuItem>
                        <MenuItem value='和光市駅前校'>
                          わ 和光市駅前校
                        </MenuItem>
                      </Select>
                    )}
                  />
                ) : null}
                {area === '岐阜' ? (
                  <Controller
                    control={control}
                    name='kyositsu'
                    render={({ field }) => (
                      <Select
                        variant='outlined'
                        value={field.value}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        fullWidth>
                        <MenuItem value='未選択'>選択してください</MenuItem>
                        <MenuItem value='岐阜忠節校'>ぎ 岐阜忠節校</MenuItem>
                        <MenuItem value='JR岐阜駅前校'>
                          じ JR岐阜駅前校
                        </MenuItem>
                      </Select>
                    )}
                  />
                ) : null}
                {area === '未選択' ? (
                  <Controller
                    control={control}
                    name='kyositsu'
                    render={({ field }) => (
                      <Select
                        defaultValue='未選択'
                        variant='outlined'
                        value={field.value}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        fullWidth>
                        <MenuItem value='未選択'>選択してください</MenuItem>
                      </Select>
                    )}
                  />
                ) : null}
                {errors.kyositsu && errors.kyositsu.type === 'test_ky' && (
                  <span role='alert' css={styles.error}>
                    {errors.kyositsu.message}
                  </span>
                )}
                {errors.kyositsu && errors.kyositsu.type === 'test_ar' && (
                  <span role='alert' css={styles.error}>
                    {errors.kyositsu.message}
                  </span>
                )}
                {errors.kyositsu && errors.kyositsu.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.kyositsu.message}
                  </span>
                )}
              </dd>
            </dl>
            {/* <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>受験希望時間</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='time'
                  render={({ field }) => (
                    <Select
                      variant='outlined'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth>
                      <MenuItem value='未選択'>選択してください</MenuItem>
                      <MenuItem value='10:00~11:15'>①10:00~11:15</MenuItem>
                      <MenuItem value='13:00~14:15'>②13:00~14:15</MenuItem>
                      <MenuItem value='16:00~17:15'>③16:00~17:15</MenuItem>
                      <MenuItem value='後日受験'>④後日受験希望</MenuItem>
                    </Select>
                  )}
                />
                {errors.time && errors.time.type === 'test_tm' && (
                  <span role='alert' css={styles.error}>
                    {errors.time.message}
                  </span>
                )}
              </dd>
            </dl> */}
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>お名前（姓）</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='sei'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      placeholder='東進'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                    />
                  )}
                />
                {errors.sei && errors.sei.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.sei.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>お名前（名）</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='mei'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      placeholder='太郎'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                    />
                  )}
                />
                {errors.mei && errors.mei.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.mei.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>フリガナ（姓）</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='seikana'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      placeholder='トウシン'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                    />
                  )}
                />
                {errors.seikana && errors.seikana.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.seikana.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>フリガナ（名）</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='meikana'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      placeholder='タロウ'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                    />
                  )}
                />
                {errors.meikana && errors.meikana.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.meikana.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>性別</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='sex'
                  render={({ field }) => (
                    <RadioGroup
                      name='sex'
                      aria-label='sex'
                      value={field.value}
                      onChange={field.onChange}>
                      <FormControlLabel
                        value='男'
                        control={<Radio />}
                        inputRef={field.ref}
                        label='男'
                      />
                      <FormControlLabel
                        value='女'
                        control={<Radio />}
                        inputRef={field.ref}
                        label='女'
                      />
                    </RadioGroup>
                  )}
                />
                {errors.sex && errors.sex.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.sex.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>生年月日</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='birth_year'
                  render={({ field }) => (
                    <Select
                      variant='outlined'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      css={styles.birth_year}>
                      <MenuItem value='未選択'>年</MenuItem>
                      <MenuItem value='2006'>2006年</MenuItem>
                      <MenuItem value='2007'>2007年</MenuItem>
                      <MenuItem value='2008'>2008年</MenuItem>
                      <MenuItem value='2009'>2009年</MenuItem>
                      <MenuItem value='2010'>2010年</MenuItem>
                    </Select>
                  )}
                />
                <Controller
                  control={control}
                  name='birth_month'
                  render={({ field }) => (
                    <Select
                      variant='outlined'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      css={styles.birth_month}>
                      <MenuItem value='未選択'>月</MenuItem>
                      <MenuItem value='1'>1月</MenuItem>
                      <MenuItem value='2'>2月</MenuItem>
                      <MenuItem value='3'>3月</MenuItem>
                      <MenuItem value='4'>4月</MenuItem>
                      <MenuItem value='5'>5月</MenuItem>
                      <MenuItem value='6'>6月</MenuItem>
                      <MenuItem value='7'>7月</MenuItem>
                      <MenuItem value='8'>8月</MenuItem>
                      <MenuItem value='9'>9月</MenuItem>
                      <MenuItem value='10'>10月</MenuItem>
                      <MenuItem value='11'>11月</MenuItem>
                      <MenuItem value='12'>12月</MenuItem>
                    </Select>
                  )}
                />
                <Controller
                  control={control}
                  name='birth_date'
                  render={({ field }) => (
                    <Select
                      variant='outlined'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      css={styles.birth_date}>
                      <MenuItem value='未選択'>日</MenuItem>
                      <MenuItem value='1'>1日</MenuItem>
                      <MenuItem value='2'>2日</MenuItem>
                      <MenuItem value='3'>3日</MenuItem>
                      <MenuItem value='4'>4日</MenuItem>
                      <MenuItem value='5'>5日</MenuItem>
                      <MenuItem value='6'>6日</MenuItem>
                      <MenuItem value='7'>7日</MenuItem>
                      <MenuItem value='8'>8日</MenuItem>
                      <MenuItem value='9'>9日</MenuItem>
                      <MenuItem value='10'>10日</MenuItem>
                      <MenuItem value='11'>11日</MenuItem>
                      <MenuItem value='12'>12日</MenuItem>
                      <MenuItem value='13'>13日</MenuItem>
                      <MenuItem value='14'>14日</MenuItem>
                      <MenuItem value='15'>15日</MenuItem>
                      <MenuItem value='16'>16日</MenuItem>
                      <MenuItem value='17'>17日</MenuItem>
                      <MenuItem value='18'>18日</MenuItem>
                      <MenuItem value='19'>19日</MenuItem>
                      <MenuItem value='20'>20日</MenuItem>
                      <MenuItem value='21'>21日</MenuItem>
                      <MenuItem value='22'>22日</MenuItem>
                      <MenuItem value='23'>23日</MenuItem>
                      <MenuItem value='24'>24日</MenuItem>
                      <MenuItem value='25'>25日</MenuItem>
                      <MenuItem value='26'>26日</MenuItem>
                      <MenuItem value='27'>27日</MenuItem>
                      <MenuItem value='28'>28日</MenuItem>
                      {uru || birth_month !== '2' ? (
                        <MenuItem value='29'>29日</MenuItem>
                      ) : null}
                      {birth_month !== '2' ? (
                        <MenuItem value='30'>30日</MenuItem>
                      ) : null}
                      {long.includes(birth_month) ? (
                        <MenuItem value='31'>31日</MenuItem>
                      ) : null}
                    </Select>
                  )}
                />
                {(errors.birth_year && errors.birth_year.type === 'test_by') ||
                (errors.birth_month && errors.birth_month.type === 'test_bm') ||
                (errors.birth_date && errors.birth_date.type === 'test_bd') ? (
                  <span role='alert' css={styles.error}>
                    選択されていません
                  </span>
                ) : null}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>学年(2023年4月時点)</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='grade'
                  render={({ field }) => (
                    <Select
                      variant='outlined'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth>
                      <MenuItem value='未選択'>選択してください</MenuItem>
                      <MenuItem value='高２生'>高２生</MenuItem>
                      <MenuItem value='高１生'>高１生</MenuItem>
                      <MenuItem value='中３生'>中３生</MenuItem>
                      <MenuItem value='中２生'>中２生</MenuItem>
                      <MenuItem value='中１生'>中１生</MenuItem>
                    </Select>
                  )}
                />
                {errors.grade && errors.grade.type === 'test_gr' && (
                  <span role='alert' css={styles.error}>
                    {errors.grade.message}
                  </span>
                )}
              </dd>
            </dl>
            {!loading && (
              <>
                <dl css={styles.form_col}>
                  <dt css={styles.form_label_require}>
                    <label>
                      郵便番号
                      <br />
                      <span css={styles.bumonlink}>
                        （半角7文字ハイフンなし)
                      </span>
                    </label>
                  </dt>
                  <dd css={styles.form_input}>
                    <Controller
                      control={control}
                      name='postal_code'
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          placeholder='2210056'
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          fullWidth
                          inputProps={{
                            maxLength: 7,
                            pattern: '^[0-9]{7}$',
                          }}
                        />
                      )}
                    />
                    {errors.postal_code &&
                      errors.postal_code.type === 'required' && (
                        <span role='alert' css={styles.error}>
                          {errors.postal_code.message}
                        </span>
                      )}
                    {error && error.message && (
                      <span role='alert' css={styles.error}>
                        <br />
                        正しい形式の郵便番号を入力してください
                      </span>
                    )}
                  </dd>
                </dl>
                <dl css={styles.form_col}>
                  <dt css={styles.form_label_require}>
                    <label>都道府県</label>
                  </dt>
                  <dd css={styles.form_input}>
                    <Controller
                      control={control}
                      name='region'
                      render={({ field }) => (
                        <Select
                          variant='outlined'
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          fullWidth>
                          <MenuItem value='未選択'>選択してください</MenuItem>
                          <MenuItem value='北海道'>北海道</MenuItem>
                          <MenuItem value='青森県'>青森県</MenuItem>
                          <MenuItem value='岩手県'>岩手県</MenuItem>
                          <MenuItem value='宮城県'>宮城県</MenuItem>
                          <MenuItem value='秋田県'>秋田県</MenuItem>
                          <MenuItem value='山形県'>山形県</MenuItem>
                          <MenuItem value='福島県'>福島県</MenuItem>
                          <MenuItem value='栃木県'>栃木県</MenuItem>
                          <MenuItem value='群馬県'>群馬県</MenuItem>
                          <MenuItem value='茨城県'>茨城県</MenuItem>
                          <MenuItem value='埼玉県'>埼玉県</MenuItem>
                          <MenuItem value='千葉県'>千葉県</MenuItem>
                          <MenuItem value='東京都'>東京都</MenuItem>
                          <MenuItem value='神奈川県'>神奈川県</MenuItem>
                          <MenuItem value='山梨県'>山梨県</MenuItem>
                          <MenuItem value='長野県'>長野県</MenuItem>
                          <MenuItem value='新潟県'>新潟県</MenuItem>
                          <MenuItem value='富山県'>富山県</MenuItem>
                          <MenuItem value='石川県'>石川県</MenuItem>
                          <MenuItem value='福井県'>福井県</MenuItem>
                          <MenuItem value='静岡県'>静岡県</MenuItem>
                          <MenuItem value='岐阜県'>岐阜県</MenuItem>
                          <MenuItem value='愛知県'>愛知県</MenuItem>
                          <MenuItem value='三重県'>三重県</MenuItem>
                          <MenuItem value='滋賀県'>滋賀県</MenuItem>
                          <MenuItem value='京都府'>京都府</MenuItem>
                          <MenuItem value='大阪府'>大阪府</MenuItem>
                          <MenuItem value='兵庫県'>兵庫県</MenuItem>
                          <MenuItem value='奈良県'>奈良県</MenuItem>
                          <MenuItem value='和歌山県'>和歌山県</MenuItem>
                          <MenuItem value='鳥取県'>鳥取県</MenuItem>
                          <MenuItem value='島根県'>島根県</MenuItem>
                          <MenuItem value='岡山県'>岡山県</MenuItem>
                          <MenuItem value='広島県'>広島県</MenuItem>
                          <MenuItem value='山口県'>山口県</MenuItem>
                          <MenuItem value='徳島県'>徳島県</MenuItem>
                          <MenuItem value='香川県'>香川県</MenuItem>
                          <MenuItem value='愛媛県'>愛媛県</MenuItem>
                          <MenuItem value='高知県'>高知県</MenuItem>
                          <MenuItem value='福岡県'>福岡県</MenuItem>
                          <MenuItem value='佐賀県'>佐賀県</MenuItem>
                          <MenuItem value='長崎県'>長崎県</MenuItem>
                          <MenuItem value='熊本県'>熊本県</MenuItem>
                          <MenuItem value='大分県'>大分県</MenuItem>
                          <MenuItem value='宮崎県'>宮崎県</MenuItem>
                          <MenuItem value='鹿児島県'>鹿児島県</MenuItem>
                          <MenuItem value='沖縄県'>沖縄県</MenuItem>
                        </Select>
                      )}
                    />
                    {errors.region && errors.region.type === 'required' && (
                      <span role='alert' css={styles.error}>
                        {errors.region.message}
                      </span>
                    )}
                  </dd>
                </dl>
                <dl css={styles.form_col}>
                  <dt css={styles.form_label_require}>
                    <label>市区町村</label>
                  </dt>
                  <dd css={styles.form_input}>
                    <Controller
                      control={control}
                      name='locality'
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          placeholder='横浜市神奈川区'
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          fullWidth
                        />
                      )}
                    />
                    {errors.locality && errors.locality.type === 'required' && (
                      <span role='alert' css={styles.error}>
                        {errors.locality.message}
                      </span>
                    )}
                  </dd>
                </dl>
                <dl css={styles.form_col}>
                  <dt css={styles.form_label_require}>
                    <label>町名番地</label>
                  </dt>
                  <dd css={styles.form_input}>
                    <Controller
                      control={control}
                      name='street_address'
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          placeholder='金港町1-4'
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          fullWidth
                        />
                      )}
                    />
                    {errors.street_address &&
                      errors.street_address.type === 'required' && (
                        <span role='alert' css={styles.error}>
                          {errors.street_address.message}
                        </span>
                      )}
                  </dd>
                </dl>
                <dl css={styles.form_col}>
                  <dt css={styles.form_label}>
                    <label>以降の住所</label>
                  </dt>
                  <dd css={styles.form_input}>
                    <Controller
                      control={control}
                      name='extended_address'
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          placeholder='横浜イーストスクエア5F'
                          value={field.value}
                          onChange={field.onChange}
                          inputRef={field.ref}
                          fullWidth
                        />
                      )}
                    />
                    {errors.extended_address &&
                      errors.extended_address.type === 'required' && (
                        <span role='alert' css={styles.error}>
                          {errors.extended_address.message}
                        </span>
                      )}
                  </dd>
                </dl>
              </>
            )}
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>メールアドレス</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='email'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      placeholder='toshin@t-msg.co.jp'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                    />
                  )}
                />
                {errors.email && errors.email.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.email.message}
                  </span>
                )}
                {errors.email && errors.email.type === 'email' && (
                  <span role='alert' css={styles.error}>
                    {errors.email.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>
                  電話番号
                  <br />
                  <span css={styles.bumonlink}>（半角数字・携帯可)</span>
                </label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='phone'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      placeholder='080-0000-0000'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                    />
                  )}
                />
                {errors.phone && errors.phone.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.phone.message}
                  </span>
                )}
              </dd>
            </dl>
            <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>学校名</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='school'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      placeholder='MSG東進高校'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                    />
                  )}
                />
                {errors.school && errors.school.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.school.message}
                  </span>
                )}
              </dd>
            </dl>
            {/* <dl css={styles.form_col}>
              <dt css={styles.form_label}>
                <label>特典コード</label>
              </dt>
              <dd>
                <p css={styles.code}>02923531</p>
                <Controller
                  control={control}
                  name='code'
                  render={({ field }) => (
                    <TextField
                      css={styles.form_input_code}
                      variant='outlined'
                      placeholder='02923531'
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      disabled
                      fullWidth
                    />
                  )}
                />
                {errors.code && errors.code.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.code.message}
                  </span>
                )}
              </dd>
            </dl> */}
            <dl css={styles.form_col}>
              <dt css={styles.form_label}>
                <label>ご要望・ご質問など</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='comment'
                  render={({ field }) => (
                    <TextField
                      variant='outlined'
                      label=''
                      placeholder={`
                      ご質問・ご要望などご自由にご記入ください（最大500文字）
                      
                      例） 部活動の予定があり、午後14時以降で受験したいのですが大丈夫でしょうか？
                      `}
                      value={field.value}
                      onChange={field.onChange}
                      inputRef={field.ref}
                      fullWidth
                      multiline
                      rows={8}
                    />
                  )}
                />
                {errors.comment && errors.comment.type === 'max' && (
                  <span role='alert' css={styles.error}>
                    {errors.comment.message}
                  </span>
                )}
              </dd>
            </dl>
            {/* <dl css={styles.form_col}>
              <dt css={styles.form_label_require}>
                <label>記入者</label>
              </dt>
              <dd css={styles.form_input}>
                <Controller
                  control={control}
                  name='person'
                  render={({ field }) => (
                    <RadioGroup
                      name='person'
                      aria-label='personwhofill'
                      value={field.value}
                      onChange={field.onChange}>
                      <FormControlLabel
                        value='生徒ご本人'
                        control={<Radio />}
                        inputRef={field.ref}
                        label='生徒ご本人'
                      />
                      <FormControlLabel
                        value='母'
                        control={<Radio />}
                        inputRef={field.ref}
                        label='母'
                      />
                      <FormControlLabel
                        value='父'
                        control={<Radio />}
                        inputRef={field.ref}
                        label='父'
                      />
                      <FormControlLabel
                        value='その他'
                        control={<Radio />}
                        inputRef={field.ref}
                        label='その他'
                      />
                    </RadioGroup>
                  )}
                />
                {errors.person && errors.person.type === 'required' && (
                  <span role='alert' css={styles.error}>
                    {errors.person.message}
                  </span>
                )}
              </dd>
            </dl> */}
            <div css={styles.form_submit}>
              <Typography component='p' css={styles.form_policy}>
                <Link
                  href='https://t-msg.co.jp/privacy/'
                  passHref
                  target='_blank'
                  css={styles.link}>
                  プライバシーポリシー
                </Link>
                をご確認の上、下記ボタンより送信してください。
              </Typography>
              <Typography variant='h6' css={styles.micro} color='primary'>
                ＼ 一足先に情報のテストを体験しちゃおう！ ／
              </Typography>
              <Button
                type='submit'
                variant='contained'
                css={styles.form_btn}
                disabled={isClosed}>
                {isClosed ? '申込受付は終了しました' : '送信する'}
                <span className='arrow' css={styles.arrow}></span>
              </Button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

const arrowMotion = keyframes`
    from {
      left:0;
      opacity: 1;
    }
    30% {
      left: 30px;
      opacity: 0;
    }
    50% {
      left: -30px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `

const styles = {
  wrapper: css`
    width: 100vw;
    background-color: #ffffff;
  `,
  head: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 40px 0 0;
  `,
  subtitle: css`
    padding: 40px 0;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: center;
  `,
  form_wrapper: css`
    padding: 40px 0;
    @media (min-width: 960px) {
      width: 80vw;
      max-width: 1100px;
      margin: 0 auto;
    }
  `,
  required: css`
    margin-right: 40px;
    text-align: end;
    font-size: 0.8rem;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    & span {
      color: #007c80;
    }
  `,
  uncontrolled: css`
    display: none;
  `,
  form_col: css`
    margin: 0 30px 0;
    display: flex;
    flex-flow: column;
    @media (min-width: 960px) {
      align-items: flex-start;
      flex-flow: row;
      margin: 30px 0 0;
    }
  `,
  form_label_require: css`
    position: relative;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    padding: 20px 0 5px 0;
    &:after {
      content: '※';
      color: #007c80;
      font-size: 0.7rem;
      font-family: 'Noto sans JP', sans-serif;
      font-weight: 700;
      position: absolute;
      top: 15px;
      transform: translateX(5px);
    }
    @media (min-width: 960px) {
      width: 250px;
      padding: 20px 30px 0 0;
    }
  `,
  form_label: css`
    position: relative;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    padding: 20px 0 5px 0;
    @media (min-width: 960px) {
      width: 250px;
      padding: 20px 30px 0 0;
    }
  `,
  form_input: css`
    width: 100%;
    margin-inline-start: 0;
    background-color: white;
    & .MuiFormControl-root .MuiOutlinedInput-root input {
      font-family: 'Noto sans JP', sans-serif;
      font-weight: 400;
    }
    @media (min-width: 960px) {
      width: calc(100% - 250px);
    }
  `,
  form_input_code: css`
    display: none;
  `,
  code: css`
    padding-top: 15px;
  `,
  error: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    color: #e02525;
    margin-top: 10px;
  `,
  birth_year: css`
    width: 38%;
    margin-right: 2%;
  `,
  birth_month: css`
    width: 29%;
    margin-right: 2%;
  `,
  birth_date: css`
    width: 29%;
  `,
  bumonlink: css`
    font-size: 0.6rem;
  `,
  bumon: css`
    cursor: pointer;
    color: #2a838f;
    border-bottom: 1px solid #2a838f;
  `,
  form_submit: css`
    width: 80vw;
    margin: 30px auto 30px;
    @media (min-width: 960px) {
      width: 100vw;
      max-width: 1180px;
      margin: 0 auto;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
  `,
  form_policy: css`
    margin: 30px 0;
    @media (min-width: 960px) {
      margin: 70px 0 40px;
    }
  `,
  link: css`
    cursor: pointer;
    color: black;
    border-bottom: 1px solid;
  `,
  micro: css`
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-align: center;
    margin-bottom: 5px;
    @media (min-width: 960px) {
      font-size: 1.2rem;
      letter-spacing: 0.4rem;
    }
  `,
  form_btn: css`
    height: 80px;
    width: 80vw;
    color: white;
    background-color: #ee7253;
    border: 1px solid;
    border-radius: 20px;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    transition: background-color 0.6s ease-in-out;
    &:hover {
      background-color: orange;
    }
    &:hover .arrow:after {
      animation: ${arrowMotion} 0.7s ease-in-out infinite;
    }
    @media (min-width: 960px) {
      width: 500px;
      height: 80px;
      font-size: 1.5rem;
    }
  `,
  arrow: css`
    position: relative;
    border: 1.5px solid;
    border-radius: 50%;
    margin-left: 20px;
    width: 30px;
    height: 30px;
    &:after {
      content: '\f054';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      font-size: 13px;
      display: block;
      top: 4px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transition: all 0.5s ease;
    }
    @media (min-width: 960px) {
      border: 1.9px solid;
    }
  `,
}

const setAnimation = () => {
  gsap.from('.title_fm', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.title_fm',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.subtitle_fm', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.subtitle_fm',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
}

export default Form
