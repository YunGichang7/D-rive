export const sendToSlack = async ({
  reason,
  name,
  email,
  company,
  message,
}: {
  reason: string;
  name: string;
  email: string;
  company: string;
  message: string;
}) => {
  const webhookUrl = import.meta.env.VITE_SLACK_WEBHOOK as string | undefined;
  if (!webhookUrl) {
    console.error("Slack webhook URL is not defined");
    return;
  }

  const payload = {
    text: `📬 *새 문의 도착!*\n
*• 문의 종류:* ${reason}
*• 이름:* ${name}
*• 이메일:* ${email}
*• 회사명:* ${company}
*• 내용:*\n${message}`,
  };

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
