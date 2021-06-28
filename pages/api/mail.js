// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 const mailMessage = (req, res) => {
  const body = JSON.parse(req.body);
  console.log('body: ', body);
  res.status(200).json({ status: 'Ok' });
}

export default mailMessage;
