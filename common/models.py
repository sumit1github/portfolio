from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from ckeditor.fields import RichTextField


class MyAccountManager(BaseUserManager):
	def create_user(self, email, username, password=None):
		if not email:
			raise ValueError('Users must have an email address')
		if not username:
			raise ValueError('Users must have a username')

		user = self.model(
			email=self.normalize_email(email),
			username=username,
		)

		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, email, username, password):
		user = self.create_user(
			email=self.normalize_email(email),
			password=password,
			username=username,
		)
		user.is_staff = True
		user.is_superuser = True
		user.save(using=self._db)
		return user
	

class User(AbstractBaseUser, PermissionsMixin):
	# user field
	username = models.CharField(max_length=100, unique=True, null=True,blank=True)
	password = models.TextField(null=True,blank=True)
	email = models.EmailField(null=True,blank=True)
	first_name = models.CharField(max_length=255, null=True, blank=True)
	last_name = models.CharField(max_length=255, null=True, blank=True)
	designation = models.CharField(max_length=255, null=True, blank=True)
	dob = models.CharField(max_length=255, null=True, blank=True)
	location = models.CharField(max_length=255, null=True, blank=True)
	
	is_superuser = models.BooleanField(default=True)
	is_staff = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)

	contact_number = models.CharField(max_length=10, null=True)
	USERNAME_FIELD = "username"	
	REQUIRED_FIELDS = ["email","password"]

	objects = MyAccountManager()

	def save(self, *args, **kwargs):
		super(User, self).save(*args, **kwargs)

	def create_new_token():
		pass
		
	def get_full_name(self):
		full_name = None
		if self.first_name or self.last_name:
			full_name = self.first_name + " " + self.last_name
		return full_name if full_name else self.email

	@property
	def full_name(self):
		return self.get_full_name()

class Project(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
	
	title = models.CharField(max_length=255, null=True, blank=True)
	description = RichTextField()
	cover_image = models.FileField(upload_to='project/' ,null=True, blank=True)
	
class ProjectImages(models.Model):
	project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, blank=True)
	image = models.FileField(upload_to='project/' ,null=True, blank=True) 