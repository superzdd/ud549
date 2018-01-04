var AddressBook = function() {
	var self = this;
	self.contactArray = [];
	self.initContactsComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;
	setTimeout(function() {
		self.initContactsComplete = true;
		if(!!cb) {
			cb();
		}
	}, 1000);
}

AddressBook.prototype.addContact = function(c) {
	this.contactArray.push(c);
}

AddressBook.prototype.getContact = function(index) {
	return this.contactArray[index];
}

AddressBook.prototype.deleteContact = function(index) {
	return this.contactArray.splice(index, 1);
}