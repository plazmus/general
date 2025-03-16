import os
from pyftpdlib.authorizers import DummyAuthorizer
from pyftpdlib.handlers import FTPHandler
from pyftpdlib.servers import FTPServer

# Set FTP root directory
ftp_directory = "/srv/ftp"

# Ensure directory exists
if not os.path.exists(ftp_directory):
    os.makedirs(ftp_directory, exist_ok=True)

# Set up FTP user and permissions
authorizer = DummyAuthorizer()
authorizer.add_user("ftpuser", "password", ftp_directory, perm="elradfmw")  # Full read/write

# Set up FTP handler
handler = FTPHandler
handler.authorizer = authorizer

# Run FTP server on port 2221
server = FTPServer(("0.0.0.0", 2221), handler)

print(f"FTP server started on port 2221. Upload files to: {ftp_directory}")
server.serve_forever()
