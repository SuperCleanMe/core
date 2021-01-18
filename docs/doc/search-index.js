var searchIndex = JSON.parse('{\
"kalavar_core":{"doc":"","i":[[0,"managers","kalavar_core","Structure definitions for all of the management …",null,null],[0,"config","kalavar_core::managers","Documentation for the configuration manager",null,null],[3,"ConfigManager","kalavar_core::managers::config","A utility structure designed to parse the content of the …",null,null],[12,"config_path","","(Platform dependant) path to the configuration file",0,null],[12,"config","","The actual configuration of the software",0,null],[3,"Config","","A structure containing the root keys of the config.toml …",null,null],[12,"network","","Network configuration options",1,null],[12,"language","","Language related configuration options",1,null],[3,"NetConfig","","Network configuration option utility structure",null,null],[12,"bind_port","","The port which the server should attempt to bind itself to",2,null],[12,"bind_addr","","The IP address which the server should attempt to bind to",2,null],[12,"max_connections","","The maximum number of connections the server should …",2,null],[12,"connections_per_thread","","The maximum number of connections that the server should …",2,null],[3,"LanguageConfig","","Utility structure to define things relating to language …",null,null],[12,"convention","","The naming convention against which to validate the names …",3,null],[12,"database_convention","","The naming convention against which to validate the names …",3,null],[12,"table_convention","","The naming convention against which to validate the names …",3,null],[12,"column_convention","","The naming convention against which to validate the names …",3,null],[12,"procedure_convention","","The naming convention against which to validate the names …",3,null],[0,"logging","kalavar_core::managers","Documentation for the logging manager",null,null],[3,"LoggingManager","kalavar_core::managers::logging","A utility structure designed to assist in the processing …",null,null],[12,"levels","","Defines the different log levels, auto populated at …",4,null],[12,"log_file","","Defines the relative path to the log file",4,null],[12,"log_file_full","","Defines the distinctive path to the log file",4,null],[0,"connections","kalavar_core::managers","Documentation for connections",null,null],[0,"connection","kalavar_core::managers::connections","Documentation for the connection structure",null,null],[3,"Connection","kalavar_core::managers::connections::connection","A structure used to represent a connection to the system …",null,null],[12,"id","","The identification number of the connection, used by the …",5,null],[12,"opened","","The time at which the connection was initialized",5,null],[12,"remote","","The address of the connection",5,null],[12,"stream","","The datastream of the client, consists of the encryption …",5,null],[12,"logger","","The distinctive logging manager for this client,",5,null],[12,"last_ping","","The timestamp of the last time the connection was …",5,null],[12,"receiver","","The receiver for messages from the connection manager to …",5,null],[12,"transmitter","","The transmitter used to transmit messsages to the …",5,null],[0,"connection_manager","kalavar_core::managers::connections","Documentation for the connection manager",null,null],[3,"ConnectionManager","kalavar_core::managers::connections::connection_manager","A utility structure designed to simplify the management …",null,null],[12,"listener","","An optional TCP Listener (optional due to being added …",6,null],[12,"port","","The port that the listener will bind to",6,null],[12,"addr","","The IP that the listener will bind to",6,null],[12,"connections","","The id of the next connection",6,null],[12,"dbm","","The storage manager",6,null],[0,"storage","kalavar_core::managers","Documentation for the storage manager",null,null],[3,"StorageManager","kalavar_core::managers::storage","Utility structure whose only job is to manage the smooth …",null,null],[12,"databases","","A tracking map of all the databases that the program has …",7,null],[12,"last_write","","The last time that any in-memory data was dumped to the …",7,null],[12,"dir","","The directory to scan for potential databases",7,null],[0,"encryption","kalavar_core::managers","Documentation for the encryption manager",null,null],[3,"EncryptionManager","kalavar_core::managers::encryption","A utility structure for handling encryption between the …",null,null],[12,"key","","The key used to encrypt the data",8,null],[12,"stream","","The stream the data should be sent to, and decrypted from",8,null],[11,"new","","A utility method to instantiate a new encryption manager …",8,[[["tcpstream",3]],["encryptionmanager",3]]],[11,"init","","(OBSOLETE) A method to send information about the …",8,[[]]],[11,"write","","Encrypt and then write the provided data to the TcpStream …",8,[[]]],[11,"read","","(OBSOLETE) Read and subsequently decrypt the data …",8,[[["bufreader",3]]]],[0,"analytics","kalavar_core::managers","Documentation for the analytics manager",null,null],[0,"authentication","","Documentation for the authentication manager",null,null],[3,"AuthManager","kalavar_core::managers::authentication","A utility structure for managing authentication with the …",null,null],[12,"permissions","","A structure representing the permissions that the user …",9,null],[12,"remote","","The remote address of the client",9,null],[12,"is_admin","","If the user is considered an administrator of the system",9,null],[12,"is_root","","If the user is considered to be the \\\"root\\\" user",9,null],[12,"username","","The user\'s name",9,null],[12,"certificate","","The certificate which the user used during authentication",9,null],[12,"validated","","If the user has been successfully logged in, or has been …",9,null],[0,"permission","kalavar_core::managers","Documentation for the permissions manager",null,null],[3,"PermissionManager","kalavar_core::managers::permission","Describes the permissions  has for any given database or …",null,null],[12,"inner","","A map containing keyed database permission sets, where …",10,null],[3,"DatabasePermissions","","Describes the permissions  has for the reference …",null,null],[12,"int","","The permissions integer used to generate this permission …",11,null],[12,"create","","If the user can create databases",11,null],[12,"delete","","If the user can delete databases",11,null],[12,"read","","If the user can read the content of the database",11,null],[12,"write","","If the user is able to write to the database (modifying …",11,null],[12,"change_name","","If the user can change the name of the database",11,null],[12,"add_tables","","If the user can add tables to the database",11,null],[12,"remove_tables","","If the user can remove tables from the database",11,null],[12,"modify_tables","","If the user can modify the tables within the database",11,null],[12,"access","","A map containing keyed table permission sets, where the …",11,null],[3,"TablePermissions","","Describes the permissions  has for the reference table. …",null,null],[12,"int","","The permissions integer used to generate this permission …",12,null],[12,"create","","If the user can create tables within the database",12,null],[12,"delete","","If the user can remove tables from the database",12,null],[12,"read","","If the user can read the contents of the table in question",12,null],[12,"write","","If the user is able to write table (modifying it)",12,null],[12,"change_name","","If the user is allowed to change the name of the table",12,null],[12,"add_columns","","If the user can add additional columns to the table",12,null],[12,"remove_columns","","If the user can remove columns from the table",12,null],[12,"modify_columns","","If the user can modify the currently existing columns in …",12,null],[0,"implementors","kalavar_core::managers","Implentation definitions for all of the management …",null,null],[0,"managers","kalavar_core::managers::implementors","",null,null],[0,"config","kalavar_core::managers::implementors::managers","",null,null],[11,"new","kalavar_core::managers::config","A helper method to build and pre-configure a …",0,[[["loggingmanager",3]]]],[17,"BASE_CONFIG","kalavar_core::managers::implementors::managers::config","(OBSOLETE) Defines the default configuration file, this …",null,null],[0,"logging","kalavar_core::managers::implementors::managers","",null,null],[17,"RESET","kalavar_core::managers::implementors::managers::logging","",null,null],[17,"FG_RED","","",null,null],[17,"FG_YEL","","",null,null],[17,"FG_GRE","","",null,null],[17,"FG_CYA","","",null,null],[17,"FG_MAG","","",null,null],[17,"FG_GRY","","",null,null],[11,"new","kalavar_core::managers::logging","Generates a new (fully populated) instance of the logging …",4,[[],["loggingmanager",3]]],[11,"init","","Prints headers for log table",4,[[]]],[11,"fatal","","Log data to the console and the log file with the …",4,[[["errormap",4],["display",8]]]],[11,"debug_message","","Logs content to the terminal and file with the \\\"DEBUG\\\" …",4,[[["into",8],["string",3]]]],[11,"debug","","Prints content to the terminal and file without any …",4,[[["debug",8]]]],[11,"debug_pretty","","Prints a single entry to the terminal and console for …",4,[[["debug",8]]]],[11,"info","","Displays information to the user via the terminal and log …",4,[[["display",8]]]],[11,"log","","Prints information to the terminal and log file",4,[[["display",8]]]],[11,"warn","","Prints a warning to the terminal and log file",4,[[["display",8]]]],[11,"error","","Notifies the user of an error via a message in the log …",4,[[["errormap",4],["display",8]]]],[5,"format_date","kalavar_core::managers::implementors::managers::logging","Helper method for formatting date-time information for …",null,[[]]],[0,"connections","kalavar_core::managers::implementors::managers","",null,null],[0,"connection","kalavar_core::managers::implementors::managers::connections","",null,null],[11,"new","kalavar_core::managers::connections::connection","Utility method to instantiate a new Connection structure …",5,[[["loggingmanager",3],["connectionprotocolmessage",3],["sender",3],["receiver",3]]]],[0,"connection_manager","kalavar_core::managers::implementors::managers::connections","",null,null],[11,"new","kalavar_core::managers::connections::connection_manager","Helper function used to instantiate a new connection …",6,[[["configmanager",3],["loggingmanager",3]]]],[11,"connect","","Launches the memory management thread, and the storage …",6,[[["loggingmanager",3]]]],[0,"storage","kalavar_core::managers::implementors::managers","",null,null],[11,"new","kalavar_core::managers::storage","Instantiates a new storage manager on behalf of the caller",7,[[["loggingmanager",3]]]],[5,"parse_incoming","kalavar_core::managers::implementors::managers::storage","Utility method to parse the database files within the …",null,[[["loggingmanager",3],["storagemanager",3]]]],[5,"handle_missing_data_dir","","Utility function to handle the event that the data …",null,[[["loggingmanager",3],["errorkind",4],["string",3]]]],[0,"core_structures","kalavar_core","Structure definitions for things like databases and tables",null,null],[0,"database_record","kalavar_core::core_structures","Definition information for the database_record structure",null,null],[3,"DatabaseRecord","kalavar_core::core_structures::database_record","Helper structure used to locate specific data entries for …",null,null],[12,"name","","The name of the database this record represents",13,null],[12,"tables","","A HashMap containing the name of each table the database …",13,null],[12,"backing","","The file that is backing this database\'s data",13,null],[12,"backing_is_dir","","If that file is actually a directory, or just a file",13,null],[11,"new","","",13,[[["string",3]],["databaserecord",3]]],[11,"new_table","","",13,[[["vec",3],["string",3]]]],[11,"read_table","","",13,[[]]],[0,"table","kalavar_core::core_structures","Definition information for the table structure",null,null],[3,"Table","kalavar_core::core_structures::table","A structure defining the contents of a table within a …",null,null],[12,"name","","The name of the table this struct references",14,null],[12,"columns","","The columns (and their types) of this table",14,null],[12,"rows","","An (unsorted) array of all the rows in this table",14,null],[11,"new","","Helper method designed to instantiate a new table on …",14,[[["vec",3],["into",8],["string",3]],["table",3]]],[0,"query","kalavar_core::core_structures","Definition information for the query structure",null,null],[0,"query_result","","Definition information for the query_result structure",null,null],[0,"column","","Definition information for the column structure",null,null],[17,"BIT","kalavar_core::core_structures::column","",null,null],[17,"BYTE","","",null,null],[17,"KB","","",null,null],[17,"MB","","",null,null],[17,"GB","","",null,null],[4,"ColumnTypeEnum","","An enumerator which defines the available column types I …",null,null],[13,"String","","A generic String type",15,null],[13,"JSON","","JSON flavoured string",15,null],[13,"Bool","","Boolean data type for columns",15,null],[13,"Byte","","8 Bit storage type",15,null],[13,"BLOB","","Binary Large Object type",15,null],[13,"Integer8","","Unsigned 8 bit integer",15,null],[13,"Integer16","","Unsigned 16 bit integer",15,null],[13,"Integer32","","Unsigned 32 bit integee",15,null],[13,"Integer64","","Unsigned 64 bit integer",15,null],[13,"SignedInteger8","","Signed 8 bit integer",15,null],[13,"SignedInteger16","","Signed 16 bit integer",15,null],[13,"SignedInteger32","","Signed 32 bit integer",15,null],[13,"SignedInteger64","","Signed 64 bit integer",15,null],[13,"BigInteger","","An unsigned integer, comprised of other integers to …",15,null],[13,"SignedBigInteger","","A signed integer, comprised of other integers to provide …",15,null],[13,"Snowflake","","Snowflake unique identifier",15,null],[13,"UUID","","Universally Unique Identifier",15,null],[13,"SonyFlake","","Sony\'s re-thought version of Snowflake",15,null],[13,"RGB","","Red, Green, Blue color type",15,null],[13,"RGBA","","Red, Green, Blue, Alpha color type",15,null],[13,"CMYK","","Cyan, Magenta, Yellow, Black color type",15,null],[13,"Hex","","Hexadecimal color type",15,null],[13,"Array","","An array type for the column",15,null],[13,"Enum","","An enumerator type for the column, see the docs for more …",15,null],[13,"IPv4","","Simple validated IPv4 address type",15,null],[13,"IPv6","","Simple validated IPv6 address type",15,null],[13,"Mac","","Simple MAC address type",15,null],[13,"Mac8","","Mac8, currently unknown but PostgreSQL has it so it must …",15,null],[13,"Timestamp","","A timestamp, prefixed with information about the timezone …",15,null],[13,"NaiveTimestamp","","A timestamp without the prefixed timezone data, assumes …",15,null],[3,"ColumnType","","A structure designed to incorporate the data type it …",null,null],[12,"is_private","","If the column is to be hidden in results from queries",16,null],[12,"inner_type","","The type of the column",16,null],[12,"min_len","","The minimum length of the column type in question (the …",16,null],[12,"max_len","","The maximum length of the column type in question (the …",16,null],[12,"value_type","","The potential sub type of the type, if applicable",16,null],[11,"new","","Helper method to generate a new column",16,[[["option",4],["columntypeenum",4]],["columntype",3]]],[11,"new_prv","","Helper method to generate a new private column which …",16,[[["option",4],["columntypeenum",4]],["columntype",3]]],[5,"process_column","","Helper function for serialization using the record types",null,[[["columntype",3],["columntypeenum",4]],["columntype",3]]],[0,"row","kalavar_core::core_structures","Definition information for the row and cell structure",null,null],[3,"Row","kalavar_core::core_structures::row","A structure wrapping the cells of each row in a neat …",null,null],[12,"entries","","A map linking each cell within the row, to its parent …",17,null],[3,"Cell","","A structure defining the type of column that the data is …",null,null],[12,"inner_type","","The type of data stored in \\\"inner_value\\\" Influences how …",18,null],[12,"inner_value","","The raw binary data for the given data type, must be …",18,null],[11,"new","","",17,[[["vec",3]],["row",3]]],[11,"populate","","",17,[[["asbytes",8],["string",3]]]],[0,"connection_protocol","kalavar_core::core_structures","Definition information for the connection_protocol",null,null],[4,"DataType","kalavar_core::core_structures::connection_protocol","An enum describing the types of data that a …",null,null],[13,"String","","The payload contained is within the String section",19,null],[13,"Bytes","","The payload contained is within the Bytes section",19,null],[13,"MEM","","The payload contained is within the MEM section",19,null],[13,"Struct","","The payload contained is within the Struct section",19,null],[3,"ConnectionProtocolMessage","","A structure defined to help move information between …",null,null],[12,"recipient","","The intended recipient of the payload (0 for the protocol …",20,null],[12,"sender","","The ID of the thread which sent the payload",20,null],[12,"inner_type","","The type that should be expected as present",20,null],[12,"inner","","The inner data A load of Option types with varying …",20,null],[12,"opcode","","The OP code of the payload, see the docs at the link …",20,null],[11,"new_mem","","",20,[[],["connectionprotocolmessage",3]]],[11,"new_con","","",20,[[],["connectionprotocolmessage",3]]],[0,"as_bytes","kalavar_core::core_structures","Definition information for the AsBytes custom trait",null,null],[8,"AsBytes","kalavar_core::core_structures::as_bytes","",null,null],[10,"as_kv_bytes","","",21,[[],["vec",3]]],[0,"table_record","kalavar_core::core_structures","Definition information for the table_record structure",null,null],[3,"TableRecord","kalavar_core::core_structures::table_record","Helper structure used to locate specific rows for a …",null,null],[12,"inner","","A reference to the table that this record actually points …",22,null],[12,"start","","The byte number that this table begins at in the data list",22,null],[12,"end","","The byte signifying the end of this table",22,null],[12,"backing","","The name of the file backing this table",22,null],[12,"backing_is_dir","","If the backing is actually a directory, or just a file",22,null],[12,"name","","The name of the table this struct is referencing",22,null],[12,"columns","","The columns of the table, and their respective types",22,null],[12,"rows","","The rows within the table itself",22,null],[11,"new","","",22,[[["vec",3]],["tablerecord",3]]],[0,"row_record","kalavar_core::core_structures","Definition information for the row_record structure",null,null],[3,"RowRecord","kalavar_core::core_structures::row_record","Helper structure used to reference specific rows for a …",null,null],[12,"inner","","A reference to the row that this record actually points to",23,null],[12,"start","","The byte number that this row begins at in the data list",23,null],[12,"end","","The byte number that this row ends at in the data list",23,null],[12,"id","","The ID of this specific row, used for ordering",23,null],[12,"backing","","The file that is backing this particular row",23,null],[12,"backing_is_dir","","If the \\\"file\\\" is actually a directory or not",23,null],[12,"columns","","The start and end position of each of the columns within …",23,null],[0,"core","kalavar_core","A selection of utilities and helper methods to ensure …",null,null],[0,"utils","kalavar_core::core","",null,null],[0,"connection_handling","kalavar_core::core::utils","",null,null],[0,"api","kalavar_core::core::utils::connection_handling","",null,null],[0,"opcode_parser","kalavar_core::core::utils::connection_handling::api","",null,null],[4,"OpCodes","kalavar_core::core::utils::connection_handling::api::opcode_parser","The enumerator defining the different operation codes, …",null,null],[13,"Normal","","",24,null],[13,"Ping","","",24,null],[13,"Pong","","",24,null],[13,"Disconnect","","",24,null],[13,"Reconnect","","",24,null],[13,"Shutdown","","",24,null],[13,"Status","","",24,null],[13,"Hello","","",24,null],[13,"Authenticate","","",24,null],[13,"Ready","","",24,null],[13,"Connect","","",24,null],[13,"MemUse","","",24,null],[13,"Terminate","","",24,null],[13,"PayloadTamper","","",24,null],[5,"handle","kalavar_core::core::utils::connection_handling","The following content is undocumented due to not being …",null,[[["connection",3]]]],[0,"errors","kalavar_core","Custom defined error types used by the program to report …",null,null],[4,"ErrorMap","kalavar_core::errors","",null,null],[13,"GXXX","","Unknown error, needs to be mapped to error code",25,null],[13,"G101","","Error connecting to database",25,null],[13,"G201","","Failed to generate required files (permissions error)",25,null],[13,"G202","","Failed to determine config directory",25,null],[13,"G203","","Failed to determine log directory",25,null],[13,"E204","","Invalid configuration file",25,null],[3,"GeneralError","","A generic error type to handle all the custom errors that …",null,null],[12,"code","","The error code which is relevant to the error …",26,null],[7,"ALLOC","kalavar_core","",null,null],[5,"main","","",null,[[]]],[11,"from","kalavar_core::managers::config","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","kalavar_core::managers::logging","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","kalavar_core::managers::connections::connection","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","kalavar_core::managers::connections::connection_manager","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","kalavar_core::managers::storage","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","kalavar_core::managers::encryption","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","kalavar_core::managers::authentication","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","kalavar_core::managers::permission","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","kalavar_core::core_structures::database_record","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","kalavar_core::core_structures::table","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","kalavar_core::core_structures::column","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","kalavar_core::core_structures::row","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","kalavar_core::core_structures::connection_protocol","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from","kalavar_core::core_structures::table_record","",22,[[]]],[11,"into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"from","kalavar_core::core_structures::row_record","",23,[[]]],[11,"into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","kalavar_core::core::utils::connection_handling::api::opcode_parser","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"from","kalavar_core::errors","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"to_string","","",25,[[],["string",3]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_string","","",26,[[],["string",3]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"clone","kalavar_core::managers::config","",0,[[],["configmanager",3]]],[11,"clone","","",1,[[],["config",3]]],[11,"clone","","",2,[[],["netconfig",3]]],[11,"clone","","",3,[[],["languageconfig",3]]],[11,"clone","kalavar_core::managers::logging","",4,[[],["loggingmanager",3]]],[11,"clone","kalavar_core::core_structures::table","",14,[[],["table",3]]],[11,"clone","kalavar_core::core_structures::column","",15,[[],["columntypeenum",4]]],[11,"clone","","",16,[[],["columntype",3]]],[11,"clone","kalavar_core::core_structures::row","",17,[[],["row",3]]],[11,"clone","","",18,[[],["cell",3]]],[11,"clone","kalavar_core::core_structures::connection_protocol","",19,[[],["datatype",4]]],[11,"clone","","",20,[[],["connectionprotocolmessage",3]]],[11,"clone","kalavar_core::core::utils::connection_handling::api::opcode_parser","",24,[[],["opcodes",4]]],[11,"clone","kalavar_core::errors","",25,[[],["errormap",4]]],[11,"fmt","kalavar_core::managers::config","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::managers::logging","",4,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::managers::storage","",7,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core_structures::database_record","",13,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core_structures::table","",14,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core_structures::column","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core_structures::row","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core_structures::connection_protocol","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core_structures::table_record","",22,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core_structures::row_record","",23,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::core::utils::connection_handling::api::opcode_parser","",24,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::errors","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::managers::permission","",10,[[["formatter",3]],["result",6]]],[11,"fmt","kalavar_core::errors","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]]],"p":[[3,"ConfigManager"],[3,"Config"],[3,"NetConfig"],[3,"LanguageConfig"],[3,"LoggingManager"],[3,"Connection"],[3,"ConnectionManager"],[3,"StorageManager"],[3,"EncryptionManager"],[3,"AuthManager"],[3,"PermissionManager"],[3,"DatabasePermissions"],[3,"TablePermissions"],[3,"DatabaseRecord"],[3,"Table"],[4,"ColumnTypeEnum"],[3,"ColumnType"],[3,"Row"],[3,"Cell"],[4,"DataType"],[3,"ConnectionProtocolMessage"],[8,"AsBytes"],[3,"TableRecord"],[3,"RowRecord"],[4,"OpCodes"],[4,"ErrorMap"],[3,"GeneralError"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);