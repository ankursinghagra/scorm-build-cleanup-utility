const index = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
  	<form action="upload" method="post" enctype="multipart/form-data">
  	<input type="file" name="filetoupload" accept=".zip"><br>
  	<input type="submit">
  	</form>`);
  return res.end();
}

module.exports = index