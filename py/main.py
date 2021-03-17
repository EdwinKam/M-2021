class Target:
	def __init__(self,id):
		self._id = id
	def __str__(self):
		return "This ID: "+str(self.id)
	def getId(self):
		return self.id
	def setId(self, id):
		self.id=id
		#self.changedId=True

a = Target(12)
print(a._id)
