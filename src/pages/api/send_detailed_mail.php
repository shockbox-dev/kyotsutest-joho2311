<html>
<head>
  <meta charset="utf-8" />
</head>
<body>
<?php
/**
 * ファイルのタイトル
 *
 * ファイルの説明.
 *
 * @category   Components
 * @package    WordPress
 * @subpackage テーマ名
 * @author     名前 <foo.bar@example.com>
 */

?>
<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header("Access-Control-Allow-Methods: POST, PUT, DELETE, PATCH");

mb_language("Japanese");
mb_internal_encoding("UTF-8");

$rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
$_POST = json_decode($rest_json, true); // JSON文字列をデコード

if (empty($_POST['name'])) {
    echo "エラー！入力がありません";
} else {
    $to = "info@t-msg.co.jp, kubo@t-msg.co.jp";
    $title = 'お問い合わせがありました【新年度特別招待講習】';
    $message = '以下の内容で「新年度特別招待講習」のお申し込みがありました。' . "\r\n" . "\r\n"
    . "************* お申し込み内容 *************" . "\r\n" . "\r\n"
    . '【申込日時】' . date("Y/m/d H:i:s") . "\r\n"
    . '【希望内容】' . "新年度特別招待講習" . "\r\n"
    . '【体験希望校舎】' . htmlspecialchars($_POST['kyositsu'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【生徒氏名】' . htmlspecialchars($_POST['name'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【生徒フリガナ】' . htmlspecialchars($_POST['hurigana'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【性別】' . htmlspecialchars($_POST['sex'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【生年月日】' . htmlspecialchars($_POST['birth_year'], ENT_QUOTES, "UTF-8") . "年" . htmlspecialchars($_POST['birth_month'], ENT_QUOTES, "UTF-8") . "月" . htmlspecialchars($_POST['birth_date'], ENT_QUOTES, "UTF-8") . "日" . "\r\n"
    . '【学年】' . htmlspecialchars($_POST['grade'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【住所】' . "〒" . htmlspecialchars($_POST['postal_code'], ENT_QUOTES, "UTF-8") . "\r\n"
    . htmlspecialchars($_POST['region'], ENT_QUOTES, "UTF-8") . htmlspecialchars($_POST['locality'], ENT_QUOTES, "UTF-8") . htmlspecialchars($_POST['street_address'], ENT_QUOTES, "UTF-8") . htmlspecialchars($_POST['extended_address'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【メールアドレス】' . htmlspecialchars($_POST['email'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【電話番号】'. htmlspecialchars($_POST['phone'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【学校名】'. htmlspecialchars($_POST['school'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【ご記入者】'. htmlspecialchars($_POST['person'], ENT_QUOTES, "UTF-8") . "\r\n"
    . '【ご要望・ご質問など】'. htmlspecialchars($_POST['comment'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . "******************************************" . "\r\n" . "\r\n"
    . "ご対応のほど、宜しくお願いいたします。";

    $headers = "From:" .mb_encode_mimeheader("MSGnetwork東進衛星予備校") ."<no_reply@t-msg.co.jp>";

    $return_to = htmlspecialchars($_POST['email'], ENT_QUOTES, "UTF-8");
    $subject = '新年度特別招待講習のお申し込みを受付いたしました。 ｜ 自動返信メール';
    $content = '以下の内容で「新年度特別招待講習」のお申し込みを受付いたしました。' . "\r\n" . "\r\n"
    . "************* お申し込み内容 *************" . "\r\n" . "\r\n"
    . '【申込日時】' . "\r\n"
    . date("Y/m/d H:i:s") . "\r\n" . "\r\n"
    . '【希望内容】' . "\r\n"
    . "新年度特別招待講習" . "\r\n" . "\r\n"
    . '【体験希望校舎】' . "\r\n"
    . htmlspecialchars($_POST['kyositsu'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【生徒氏名】' . "\r\n"
    . htmlspecialchars($_POST['name'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【生徒フリガナ】' . "\r\n"
    . htmlspecialchars($_POST['hurigana'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【性別】' . "\r\n"
    . htmlspecialchars($_POST['sex'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【生年月日】' . "\r\n"
    . htmlspecialchars($_POST['birth_year'], ENT_QUOTES, "UTF-8") . "年" . htmlspecialchars($_POST['birth_month'], ENT_QUOTES, "UTF-8") . "月" . htmlspecialchars($_POST['birth_date'], ENT_QUOTES, "UTF-8") . "日" . "\r\n" . "\r\n"
    . '【学年】' . "\r\n"
    . htmlspecialchars($_POST['grade'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【住所】' . "\r\n"
    . "〒" . htmlspecialchars($_POST['postal_code'], ENT_QUOTES, "UTF-8") . "\r\n"
    . htmlspecialchars($_POST['region'], ENT_QUOTES, "UTF-8") . htmlspecialchars($_POST['locality'], ENT_QUOTES, "UTF-8") . htmlspecialchars($_POST['street_address'], ENT_QUOTES, "UTF-8") . htmlspecialchars($_POST['extended_address'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【メールアドレス】' . "\r\n"
    . htmlspecialchars($_POST['email'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【電話番号】'. "\r\n"
    . htmlspecialchars($_POST['phone'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【学校名】'. "\r\n"
    . htmlspecialchars($_POST['school'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【ご記入者】'. "\r\n"
    . htmlspecialchars($_POST['person'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . '【ご要望・ご質問など】'. "\r\n"
    . htmlspecialchars($_POST['comment'], ENT_QUOTES, "UTF-8") . "\r\n" . "\r\n"
    . "******************************************" . "\r\n" . "\r\n"
    . "校舎スタッフよりご連絡をさせていただきます。宜しくお願いいたします。" . "\r\n" . "\r\n". "※このメールは送信専用アドレスから送信されています。" . "\r\n"
    . "※このメールへの返信によるお問合せには、お答えできませんのでご了承ください。";
    
    $header = "From:" .mb_encode_mimeheader("MSGnetwork東進衛星予備校") . "<no_reply@t-msg.co.jp>";



    if (mb_send_mail($to, $title, $message, $headers) && mb_send_mail($return_to, $subject, $content, $header)) {
        echo "メール送信成功です";
    } else {
        echo "メール送信失敗です";
    }
}
?>
</body>
</html>